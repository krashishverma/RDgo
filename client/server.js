// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import twilio from "twilio";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000", // Local React frontend
    "capacitor://localhost", // Mobile app via Capacitor
    "http://your-production-url.com", // Production URL
  ],
  credentials: true, // Allow credentials (cookies, etc.)
}));
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/rdgo";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Twilio setup
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Temporary OTP storage (Use a more persistent solution like Redis in production)
const otpStore = {};

// Define User schema and model
const userSchema = new mongoose.Schema({
  country: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

// Utility function to generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Routes

// Send OTP
app.post("/api/send-otp", async (req, res) => {
  const { country, phone } = req.body;

  if (!country || !phone) {
    return res.status(400).json({ message: "Country and phone are required." });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: "Phone number already registered." });
    }

    // Generate OTP
    const otp = generateOtp();
    otpStore[phone] = otp; // Store OTP temporarily

    // Send OTP via Twilio
    await twilioClient.messages.create({
      body: `Your OTP for RDGo is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    console.log(`OTP sent to ${phone}: ${otp}`);
    res.status(200).json({ message: "OTP sent successfully." });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Failed to send OTP." });
  }
});

// Verify OTP
app.post("/api/verify-otp", async (req, res) => {
  const { country, phone, otp } = req.body;

  if (!country || !phone || !otp) {
    return res.status(400).json({ message: "Country, phone, and OTP are required." });
  }

  // Validate OTP
  if (otpStore[phone] && otpStore[phone] == otp) {
    try {
      // Save user to database
      const newUser = new User({ country, phone, isVerified: true });
      await newUser.save();

      // Remove OTP after successful verification
      delete otpStore[phone];

      res.status(201).json({ message: "Phone number verified and user registered successfully." });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  } else {
    res.status(400).json({ message: "Invalid OTP." });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("RDGo Backend API is running.");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
