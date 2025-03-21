import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Church event"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events & Calendar</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us for worship, fellowship, and community outreach
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              There's always something happening at Grace Community Church. Find an event and get involved!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sunday Worship Service",
                date: "March 17, 2025",
                time: "9:00 AM & 11:00 AM",
                location: "Main Sanctuary",
                description:
                  "Join us for worship, prayer, and biblical teaching. Children's programs available for all services.",
                image: "worship",
              },
              {
                title: "Bible Study Group",
                date: "March 19, 2025",
                time: "7:00 PM",
                location: "Fellowship Hall",
                description:
                  "Midweek Bible study focusing on the book of Romans. All are welcome to join this engaging discussion.",
                image: "bible",
              },
              {
                title: "Community Outreach",
                date: "March 21, 2025",
                time: "9:00 AM",
                location: "Community Center",
                description:
                  "Volunteer to help distribute food and supplies to families in need in our local community.",
                image: "outreach",
              },
              {
                title: "Youth Group Meeting",
                date: "March 21, 2025",
                time: "6:30 PM",
                location: "Youth Center",
                description:
                  "Fun, fellowship, and faith development for students in grades 6-12. Games, worship, and small groups.",
                image: "youth",
              },
              {
                title: "Women's Breakfast",
                date: "March 22, 2025",
                time: "8:30 AM",
                location: "Fellowship Hall",
                description:
                  "Monthly gathering for women to connect, share, and grow together in faith. Breakfast provided.",
                image: "women",
              },
              {
                title: "Men's Prayer Group",
                date: "March 23, 2025",
                time: "6:00 AM",
                location: "Prayer Room",
                description: "Early morning prayer and devotion time for men. Coffee and light breakfast provided.",
                image: "men",
              },
            ].map((event, i) => (
              <Card key={i} className="border-none shadow-md overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=192&width=384&text=${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-sky-600 text-white px-3 py-1 text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-sky-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-sky-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                    <Button size="sm">RSVP</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              View our full calendar of events and plan your visit
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
            <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-lg">
              <Calendar className="h-16 w-16 mx-auto text-sky-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Full Calendar View</h3>
              <p className="text-gray-600 mb-4">
                Our interactive calendar would be embedded here, allowing you to view events by day, week, or month.
              </p>
              <Button>View Full Calendar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Register for Events</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Many of our events require registration to help us prepare adequately. Registration is quick and easy!
                </p>
                <p>Benefits of registering for events:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Receive event reminders and updates</li>
                  <li>Reserve your spot for limited-capacity events</li>
                  <li>Help us prepare the right amount of materials</li>
                  <li>Streamline check-in for special events</li>
                </ul>
                <p>
                  If you have questions about an event or need assistance with registration, please contact our church
                  office.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-sky-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Featured Event Registration</h3>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h4 className="text-lg font-bold mb-2">Easter Sunday Services</h4>
                <p className="text-gray-600 mb-4">April 12, 2025 • 8:00 AM, 10:00 AM & 12:00 PM</p>
                <p className="text-gray-600 mb-4">
                  Join us for a special celebration of Christ's resurrection. Multiple services available to accommodate
                  everyone.
                </p>
                <Button className="w-full">Register Now</Button>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/events" className="flex items-center text-sky-600 font-medium">
                  View All Events <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Groups</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our community groups meet regularly throughout the week for fellowship, Bible study, and prayer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Neighborhood Groups</h3>
                  <p className="text-gray-600 mb-4">
                    Groups that meet in homes throughout the city for fellowship and Bible study.
                  </p>
                  <Button variant="outline">Find a Group</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Interest Groups</h3>
                  <p className="text-gray-600 mb-4">
                    Groups formed around shared interests like hiking, cooking, or book discussions.
                  </p>
                  <Button variant="outline">Browse Groups</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Support Groups</h3>
                  <p className="text-gray-600 mb-4">
                    Groups that provide care and support for specific life challenges.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

