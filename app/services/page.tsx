import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Music, BookOpen, Heart } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Church service"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services & Sermons</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Join us for worship, prayer, and biblical teaching</p>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Worship With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple services to accommodate your schedule. All are welcome!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sunday Morning</h3>
                  <p className="text-gray-600 mb-2">9:00 AM & 11:00 AM</p>
                  <p className="text-gray-600">Traditional worship with choir and full sermon</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <Music className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sunday Evening</h3>
                  <p className="text-gray-600 mb-2">6:00 PM</p>
                  <p className="text-gray-600">Contemporary worship with band and teaching</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Wednesday Night</h3>
                  <p className="text-gray-600 mb-2">7:00 PM</p>
                  <p className="text-gray-600">Bible study and prayer meeting</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-sky-50 rounded-lg mb-4">
              <MapPin className="h-5 w-5 text-sky-600 mr-2" />
              <span className="text-gray-700">123 Faith Avenue, Cityville, ST 12345</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg">
                <Link href="/contact">Plan Your Visit</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Church worship service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  When you visit Grace Community Church, you'll be welcomed into a friendly, casual environment where
                  you can come as you are.
                </p>
                <p>Our services typically last about 75 minutes and include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Engaging worship music that blends contemporary and traditional styles</li>
                  <li>Practical, Bible-based teaching that applies to everyday life</li>
                  <li>Opportunities for prayer and reflection</li>
                  <li>Programs for children and youth during service times</li>
                </ul>
                <p>
                  Whether you're exploring faith for the first time or have been a Christian for years, we have a place
                  for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Sermons</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Missed a service? Watch or listen to our recent messages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Walking in Faith",
                speaker: "Pastor John Smith",
                date: "March 10, 2025",
                series: "Faith That Works",
              },
              {
                title: "The Power of Prayer",
                speaker: "Pastor Sarah Johnson",
                date: "March 3, 2025",
                series: "Spiritual Disciplines",
              },
              {
                title: "Finding Peace in Chaos",
                speaker: "Pastor Michael Brown",
                date: "February 24, 2025",
                series: "Peace of Mind",
              },
              {
                title: "Living with Purpose",
                speaker: "Pastor John Smith",
                date: "February 17, 2025",
                series: "Life's Big Questions",
              },
              {
                title: "The Heart of Worship",
                speaker: "Pastor Sarah Johnson",
                date: "February 10, 2025",
                series: "Worship Series",
              },
              {
                title: "Community Matters",
                speaker: "Pastor Michael Brown",
                date: "February 3, 2025",
                series: "Better Together",
              },
            ].map((sermon, i) => (
              <Card key={i} className="border-none shadow-md overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=192&width=384&text=Sermon${i + 1}`}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-sky-600 mb-1">{sermon.series}</div>
                  <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {sermon.speaker} • {sermon.date}
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Watch
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Listen
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In addition to our regular services, we offer special gatherings throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Holiday Services</h3>
                    <p className="text-gray-600">
                      Special services for Easter, Christmas, and other significant holidays. These services often
                      include special music, drama, and meaningful traditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Baptism Services</h3>
                    <p className="text-gray-600">
                      Quarterly baptism services where new believers publicly declare their faith. These joyful
                      celebrations are open to all who wish to witness this important step.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Communion Services</h3>
                    <p className="text-gray-600">
                      Monthly communion services where we remember Christ's sacrifice. These reflective services include
                      worship, scripture reading, and partaking in the Lord's Supper.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Prayer & Healing Services</h3>
                    <p className="text-gray-600">
                      Special services dedicated to prayer for healing and spiritual renewal. These intimate gatherings
                      provide space for extended prayer and ministry.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

