import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Ensure this is imported
import {
  Container,
  FormWrapper,
  Title,
  Subtitle,
  InputGroup,
  Label,
  Select,
  Input,
  Terms,
  Button,
} from "../assets/Wrappers/SingUp";

function SignUp() {
  const [formData, setFormData] = useState({
    country: "India",
    phone: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    // Check if the user is already verified and redirect
    const isVerified = sessionStorage.getItem("isVerified");
    if (isVerified) {
      navigate("/home"); // Redirect to home if already verified
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send OTP function
  const sendOtp = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formData.phone,
          country: formData.country,
        }),
      });

      const result = await response.json();
      console.log(result); // Log the result to check if the API response is successful

      if (result.message === "OTP sent successfully.") {
        setOtpSent(true); // Set OTP sent state to true
        alert("OTP sent successfully!");
      } else {
        alert(result.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP function
  const verifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formData.phone,
          otp,
          country: formData.country, // Make sure country is included in the verification
        }),
      });

      const result = await response.json();
      if (result.message === "Phone number verified and user registered successfully.") {
        alert("Phone number verified successfully!");
        sessionStorage.setItem("isVerified", "true"); // Store verification status in session storage
        navigate("/home"); // Redirect to homepage after successful verification
      } else {
        alert(result.message || "Invalid OTP.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      sendOtp(); // Send OTP if not sent
    } else {
      verifyOtp(); // Verify OTP if sent
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Welcome to RDGo 🚖</Title>
        <Subtitle>
          The fastest app to book a cab, tricycle, or a bike online nearby you
        </Subtitle>
        <form onSubmit={handleSubmit}>
          {!otpSent ? (
            <>
              <InputGroup>
                <Label htmlFor="country">Country</Label>
                <Select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="India">India (+91)</option>
                  <option value="USA">USA (+1)</option>
                  {/* Add more countries as needed */}
                </Select>
              </InputGroup>
              <InputGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <Terms>
                By clicking on "Send OTP," you are agreeing to our{" "}
                <a href="#">terms of use</a>.
              </Terms>
              <Button type="submit" disabled={loading}>
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </>
          ) : (
            <>
              <InputGroup>
                <Label htmlFor="otp">Enter OTP</Label>
                <Input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </InputGroup>
              <Button type="submit">Verify OTP</Button>
              <Button type="button" onClick={sendOtp}>
                Resend OTP
              </Button>
            </>
          )}
        </form>
      </FormWrapper>
    </Container>
  );
}

export default SignUp;
