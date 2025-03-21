import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Music, BookOpen, Baby, UserPlus, Globe, Coffee } from "lucide-react"

export default function MinistriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Church ministries"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Ministries</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find your place to serve and connect in our church community
          </p>
        </div>
      </section>

      {/* Ministry Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Grace Community Church, we believe everyone has gifts and talents to share. Our ministries provide
              opportunities to serve, grow, and connect with others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Children's Ministry",
                description:
                  "Nurturing the faith of our youngest members through age-appropriate Bible teaching, worship, and activities.",
                icon: Baby,
                image: "children",
              },
              {
                title: "Youth Ministry",
                description:
                  "Creating a space where teens can build authentic relationships, grow in their faith, and have fun together.",
                icon: Users,
                image: "youth",
              },
              {
                title: "Worship Ministry",
                description: "Using music and creative arts to lead our congregation in authentic worship experiences.",
                icon: Music,
                image: "worship",
              },
              {
                title: "Adult Discipleship",
                description:
                  "Helping adults grow in their faith through Bible studies, small groups, and mentoring relationships.",
                icon: BookOpen,
                image: "adult",
              },
              {
                title: "Outreach & Missions",
                description:
                  "Sharing God's love with our community and around the world through service and evangelism.",
                icon: Globe,
                image: "outreach",
              },
              {
                title: "Care Ministry",
                description:
                  "Providing support, prayer, and practical help to those experiencing difficult seasons of life.",
                icon: Heart,
                image: "care",
              },
              {
                title: "Welcome Team",
                description: "Creating a warm, inviting atmosphere for everyone who visits our church.",
                icon: UserPlus,
                image: "welcome",
              },
              {
                title: "Prayer Ministry",
                description:
                  "Interceding for the needs of our church, community, and world through regular prayer gatherings.",
                icon: Heart,
                image: "prayer",
              },
              {
                title: "Hospitality Ministry",
                description: "Building community through shared meals, events, and fellowship opportunities.",
                icon: Coffee,
                image: "hospitality",
              },
            ].map((ministry, i) => (
              <Card key={i} className="border-none shadow-md overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={`/placeholder.svg?height=192&width=384&text=${ministry.image}`}
                    alt={ministry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                      <ministry.icon className="h-5 w-5 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-bold">{ministry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{ministry.description}</p>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/ministries/${ministry.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="/contact?subject=Ministry%20Interest">Get Involved</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Youth+Ministry"
                alt="Youth Ministry"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600 font-medium mb-4">
                Featured Ministry
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Youth Ministry</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our Youth Ministry provides a safe, fun environment where teens in grades 6-12 can build meaningful
                  relationships, explore their faith, and discover their God-given purpose.
                </p>
                <p>Weekly gatherings include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sunday morning small groups (9:45 AM)</li>
                  <li>Wednesday night youth service (6:30 PM)</li>
                  <li>Monthly special events and service projects</li>
                  <li>Annual mission trips and summer camp</li>
                </ul>
                <p>
                  Led by Pastor Michael Brown and a dedicated team of adult volunteers, our youth ministry is committed
                  to helping teenagers build a strong foundation in Christ that will last a lifetime.
                </p>
                <div className="pt-4 flex gap-4">
                  <Button asChild>
                    <Link href="/ministries/youth">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact?subject=Youth%20Ministry">Contact Youth Pastor</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how you can use your unique gifts and talents to serve in our church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Music className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Worship Team</h3>
                    <p className="text-gray-600 mb-4">
                      Vocalists, musicians, and tech volunteers who help lead our congregation in worship each week.
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>
                        <strong>Time Commitment:</strong> Weekly rehearsals plus Sunday services
                      </p>
                      <p>
                        <strong>Skills Needed:</strong> Musical ability, teamwork, commitment
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact?subject=Worship%20Team">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Baby className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Children's Ministry</h3>
                    <p className="text-gray-600 mb-4">
                      Teachers, helpers, and check-in volunteers who create a safe, fun environment for kids to learn
                      about Jesus.
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>
                        <strong>Time Commitment:</strong> Serve 1-2 Sundays per month
                      </p>
                      <p>
                        <strong>Skills Needed:</strong> Love for children, patience, reliability
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact?subject=Children%27s%20Ministry">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <UserPlus className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Welcome Team</h3>
                    <p className="text-gray-600 mb-4">
                      Greeters, ushers, and hospitality volunteers who help create a warm, welcoming environment for
                      everyone.
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>
                        <strong>Time Commitment:</strong> Serve 1-2 Sundays per month
                      </p>
                      <p>
                        <strong>Skills Needed:</strong> Friendliness, punctuality, attention to detail
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact?subject=Welcome%20Team">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Outreach Team</h3>
                    <p className="text-gray-600 mb-4">
                      Volunteers who help plan and execute community service projects and outreach events.
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>
                        <strong>Time Commitment:</strong> Monthly meetings plus events
                      </p>
                      <p>
                        <strong>Skills Needed:</strong> Compassion, organization, teamwork
                      </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact?subject=Outreach%20Team">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Not sure where you fit? Take our spiritual gifts assessment to discover how you can best serve.
            </p>
            <Button asChild>
              <Link href="/spiritual-gifts">Take Spiritual Gifts Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ministry Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ministry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead our ministry teams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Worship Pastor", email: "sarah@gracechurch.org" },
              { name: "Michael Brown", role: "Youth Pastor", email: "michael@gracechurch.org" },
              { name: "Rebecca Martinez", role: "Children's Ministry Director", email: "rebecca@gracechurch.org" },
              { name: "James Thompson", role: "Outreach Coordinator", email: "james@gracechurch.org" },
              { name: "Lisa Chen", role: "Prayer Ministry Leader", email: "lisa@gracechurch.org" },
              { name: "David Wilson", role: "Adult Discipleship Director", email: "david@gracechurch.org" },
            ].map((leader, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=96&width=96&text=Leader${i + 1}`}
                        alt={leader.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-sky-600 mb-2">{leader.role}</p>
                    <p className="text-gray-600 mb-4">{leader.email}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`mailto:${leader.email}`}>Contact</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step in your faith journey by serving others and connecting with our church community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/contact">Contact a Ministry Leader</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/volunteer">Volunteer Application</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

