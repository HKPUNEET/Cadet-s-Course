"use client"

import React, { useState, useRef } from 'react';
import { QrCode, Upload, Mail, Phone, User, Camera, Check, AlertCircle } from 'lucide-react';

interface FormData {
    name: string;
    contact: string;
    email: string;
    screenshot: File | null;
}

function App() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        contact: '',
        email: '',
        screenshot: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const fileInputRef = useRef<HTMLInputElement>(null);

    // UPI details - you can modify these
    const upiDetails = {
        vpa: '6207847115@ptsbi', // Replace with your UPI ID
        name: 'Ayush Kumar Singh', // Replace with your name/business
        amount: '499', // Replace with amount or make dynamic
        currency: 'INR'
    };

    // Generate UPI QR code data
    const generateUPIString = () => {
        return `upi://pay?pa=${upiDetails.vpa}&pn=${encodeURIComponent(upiDetails.name)}&am=${upiDetails.amount}&cu=${upiDetails.currency}`;
    };

    // Generate QR code URL (using a free QR code API)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(generateUPIString())}`;

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.contact.trim()) {
            newErrors.contact = 'Contact number is required';
        } else if (!/^\d{10}$/.test(formData.contact.trim())) {
            newErrors.contact = 'Please enter a valid 10-digit contact number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.screenshot) {
            newErrors.screenshot = 'Payment screenshot is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                screenshot: file
            }));

            if (errors.screenshot) {
                setErrors(prev => ({
                    ...prev,
                    screenshot: ''
                }));
            }
        }
    };

    const handleQRClick = () => {
        // Create UPI link for mobile apps
        const upiLink = generateUPIString();

        // Try to open UPI apps on mobile
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = upiLink;
        } else {
            // On desktop, show instructions
            alert('Please scan this QR code with your mobile UPI app or click on mobile device to open payment apps directly.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            const submitData = new FormData();
            submitData.append("name", formData.name);
            submitData.append("contact", formData.contact);
            submitData.append("email", formData.email);
            if (formData.screenshot) {
                submitData.append("screenshot", formData.screenshot);
            }

            const res = await fetch("/api/send-email", {
                method: "POST",
                body: submitData,
            });

            if (!res.ok) throw new Error("Failed to send email");

            setSubmitSuccess(true);

            // Reset form
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({ name: "", contact: "", email: "", screenshot: null });
                if (fileInputRef.current) fileInputRef.current.value = "";
            }, 3000);
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an error submitting your payment details. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Submitted!</h2>
                    <p className="text-gray-600">Your payment details have been sent successfully. We'll verify your payment shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        UPI Payment Portal
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Complete your payment and upload verification
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Payment QR Code Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <QrCode className="w-8 h-8 text-blue-600" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Scan & Pay
                            </h2>

                            <p className="text-gray-600 mb-6">
                                Scan the QR code below with any UPI app
                            </p>

                            {/* QR Code */}
                            <div
                                className="inline-block p-4 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105"
                                onClick={handleQRClick}
                            >
                                <img
                                    src="/images/qrcode.jpg"
                                    alt="UPI QR Code"
                                    className="w-48 h-48 mx-auto"
                                />
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                                <p className="text-sm text-blue-800 font-medium">
                                    {upiDetails.vpa}
                                </p>
                                <p className="text-sm text-blue-600">
                                    Amount: ₹{upiDetails.amount}
                                </p>
                            </div>

                            <button
                                onClick={handleQRClick}
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center mx-auto space-x-2"
                            >
                                <Camera className="w-5 h-5" />
                                <span>Open Payment App</span>
                            </button>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-green-600" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                                Payment Details
                            </h2>

                            <p className="text-gray-600 text-center">
                                Fill in your details and upload payment screenshot
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                                            errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Contact Field */}
                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                                    Contact Number *
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="tel"
                                        id="contact"
                                        name="contact"
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                        className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                                            errors.contact ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter 10-digit mobile number"
                                    />
                                </div>
                                {errors.contact && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.contact}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Screenshot Upload */}
                            <div>
                                <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-2">
                                    Payment Screenshot *
                                </label>
                                <div
                                    className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors duration-300 ${
                                        errors.screenshot ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                                    }`}
                                >
                                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-600 mb-2">
                                        {formData.screenshot ? formData.screenshot.name : 'Upload payment screenshot'}
                                    </p>
                                    <input
                                        type="file"
                                        id="screenshot"
                                        name="screenshot"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                    >
                                        Choose File
                                    </button>
                                </div>
                                {errors.screenshot && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.screenshot}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transform hover:scale-105'
                                }`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Payment Details'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Instructions */}
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Instructions</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Scan the QR code or click "Open Payment App" to make payment
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-green-600 font-bold">2</span>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Take a screenshot of the successful payment confirmation
                            </p>
                        </div>
                        <div className="text-center p-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-purple-600 font-bold">3</span>
                            </div>
                            <p className="text-gray-700 text-sm">
                                Fill the form with your details and upload the screenshot
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;