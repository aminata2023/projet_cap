"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Church contact"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Faith Avenue
                    <br />
                    Cityville, ST 12345
                  </p>
                  <Link href="https://maps.google.com" target="_blank" className="text-sky-600 mt-2 hover:underline">
                    Get Directions
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-2">Monday-Friday: 9am-5pm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600">info@gracechurch.org</p>
                  <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Service Times</h3>
                  <p className="text-gray-600">
                    Sunday: 9:00 AM & 11:00 AM
                    <br />
                    Wednesday: 7:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Fill out the form below and someone from our team will get back to you as
                soon as possible.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-200 transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday-Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: Closed
                    <br />
                    Sunday: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Pastoral Care">Pastoral Care</option>
                      <option value="Membership">Membership Information</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in the heart of Cityville
            </p>
          </div>

          <div className="h-[400px] relative rounded-lg overflow-hidden shadow-md">
            {/* This would be a Google Map in a real implementation */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Map would be embedded here</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Directions</h3>
                <p className="text-gray-600 mb-4">From Highway 101:</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Take exit 25 for Main Street</li>
                  <li>Turn right onto Main Street</li>
                  <li>Continue for 2 miles</li>
                  <li>Turn left onto Faith Avenue</li>
                  <li>The church will be on your right</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Parking</h3>
                <p className="text-gray-600 mb-4">
                  Free parking is available in our main lot. Additional parking can be found:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>In the overflow lot across Faith Avenue</li>
                  <li>Along Faith Avenue (Sunday only)</li>
                  <li>In the community center lot (Sunday only)</li>
                </ul>
                <p className="text-gray-600 mt-4">Handicap parking is available near the main entrance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Staff Directory</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Meet our dedicated staff team</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pastor John Smith",
                role: "Lead Pastor",
                email: "john@gracechurch.org",
                phone: "(555) 123-4567 ext. 101",
              },
              {
                name: "Sarah Johnson",
                role: "Worship Pastor",
                email: "sarah@gracechurch.org",
                phone: "(555) 123-4567 ext. 102",
              },
              {
                name: "Michael Brown",
                role: "Youth Pastor",
                email: "michael@gracechurch.org",
                phone: "(555) 123-4567 ext. 103",
              },
              {
                name: "Rebecca Martinez",
                role: "Children's Ministry Director",
                email: "rebecca@gracechurch.org",
                phone: "(555) 123-4567 ext. 104",
              },
              {
                name: "James Thompson",
                role: "Outreach Coordinator",
                email: "james@gracechurch.org",
                phone: "(555) 123-4567 ext. 105",
              },
              {
                name: "Lisa Chen",
                role: "Office Administrator",
                email: "lisa@gracechurch.org",
                phone: "(555) 123-4567 ext. 100",
              },
            ].map((staff, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&text=Staff${i + 1}`}
                        alt={staff.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{staff.name}</h3>
                    <p className="text-sky-600 mb-2">{staff.role}</p>
                    <p className="text-gray-600 text-sm">{staff.email}</p>
                    <p className="text-gray-600 text-sm mb-4">{staff.phone}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`mailto:${staff.email}`}>Contact</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Answers to common questions about our church</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What time are your services?</h3>
                <p className="text-gray-600">
                  We have Sunday services at 9:00 AM and 11:00 AM, as well as a Wednesday evening service at 7:00 PM.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What should I wear?</h3>
                <p className="text-gray-600">
                  We have no dress code. Some people dress casually while others prefer more formal attire. We want you
                  to feel comfortable, so come as you are!
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you have programs for children?</h3>
                <p className="text-gray-600">
                  Yes, we have age-appropriate programs for children from nursery through 5th grade during all of our
                  Sunday services. Our children's check-in area is located in the main lobby.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do I become a member?</h3>
                <p className="text-gray-600">
                  We offer membership classes quarterly. These classes provide an overview of our church's beliefs,
                  values, and vision. After completing the class, you can schedule a membership interview with one of
                  our pastors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How can I get involved?</h3>
                <p className="text-gray-600">
                  There are many ways to get involved! You can join a small group, serve on a ministry team, or
                  participate in outreach events. Visit our Ministries page to learn more, or contact us for
                  personalized recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

