import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Download, BookOpen, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SermonsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Church sermon"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sermons & Teachings</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Watch, listen, and grow through biblical teaching</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="search" placeholder="Search sermons..." className="pl-10" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Series" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Series</SelectItem>
                  <SelectItem value="faith">Faith That Works</SelectItem>
                  <SelectItem value="spiritual">Spiritual Disciplines</SelectItem>
                  <SelectItem value="peace">Peace of Mind</SelectItem>
                  <SelectItem value="purpose">Life's Big Questions</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Speaker" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Speakers</SelectItem>
                  <SelectItem value="john">Pastor John Smith</SelectItem>
                  <SelectItem value="sarah">Pastor Sarah Johnson</SelectItem>
                  <SelectItem value="michael">Pastor Michael Brown</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Dates</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Message</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our most recent sermon from this past Sunday
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Featured+Sermon"
                alt="Featured sermon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Walking in Faith: Trusting God in Uncertain Times</h3>
                  <p className="text-sky-600">Faith That Works Series</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                  <Button size="sm">Watch Now</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-sky-600" />
                  <span>Pastor John Smith</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-sky-600" />
                  <span>March 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1 text-sky-600" />
                  <span>James 1:2-8</span>
                </div>
              </div>

              <p className="text-gray-600">
                In this powerful message, Pastor John explores how we can maintain our faith during life's most
                challenging seasons. Drawing from the book of James, he shares practical wisdom for trusting God when
                the path ahead seems uncertain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sermon Archive</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Browse our collection of past messages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Power of Prayer",
                speaker: "Pastor Sarah Johnson",
                date: "March 3, 2025",
                series: "Spiritual Disciplines",
                scripture: "Matthew 6:5-15",
              },
              {
                title: "Finding Peace in Chaos",
                speaker: "Pastor Michael Brown",
                date: "February 24, 2025",
                series: "Peace of Mind",
                scripture: "Philippians 4:4-9",
              },
              {
                title: "Living with Purpose",
                speaker: "Pastor John Smith",
                date: "February 17, 2025",
                series: "Life's Big Questions",
                scripture: "Ephesians 2:10",
              },
              {
                title: "The Heart of Worship",
                speaker: "Pastor Sarah Johnson",
                date: "February 10, 2025",
                series: "Worship Series",
                scripture: "John 4:23-24",
              },
              {
                title: "Community Matters",
                speaker: "Pastor Michael Brown",
                date: "February 3, 2025",
                series: "Better Together",
                scripture: "Acts 2:42-47",
              },
              {
                title: "Overcoming Temptation",
                speaker: "Pastor John Smith",
                date: "January 27, 2025",
                series: "Spiritual Warfare",
                scripture: "1 Corinthians 10:13",
              },
              {
                title: "Grace for Today",
                speaker: "Pastor Sarah Johnson",
                date: "January 20, 2025",
                series: "Everyday Faith",
                scripture: "2 Corinthians 12:9",
              },
              {
                title: "Faithful Stewardship",
                speaker: "Pastor Michael Brown",
                date: "January 13, 2025",
                series: "Financial Freedom",
                scripture: "Matthew 25:14-30",
              },
              {
                title: "Loving Your Neighbor",
                speaker: "Pastor John Smith",
                date: "January 6, 2025",
                series: "Love in Action",
                scripture: "Luke 10:25-37",
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
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-sky-600 mb-1">{sermon.series}</div>
                  <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1 text-sky-600" />
                      <span>{sermon.speaker}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-sky-600" />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-3 w-3 mr-1 text-sky-600" />
                      <span>{sermon.scripture}</span>
                    </div>
                  </div>
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

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-10">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-10">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm" className="w-10">
                8
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sermon Series</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our teaching series on various topics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Faith That Works", count: "6 messages", image: "faith" },
              { title: "Spiritual Disciplines", count: "8 messages", image: "spiritual" },
              { title: "Peace of Mind", count: "5 messages", image: "peace" },
              { title: "Life's Big Questions", count: "7 messages", image: "questions" },
              { title: "Better Together", count: "4 messages", image: "together" },
              { title: "Spiritual Warfare", count: "6 messages", image: "warfare" },
              { title: "Financial Freedom", count: "5 messages", image: "financial" },
              { title: "Love in Action", count: "4 messages", image: "love" },
            ].map((series, i) => (
              <Link href="#" key={i}>
                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={`/placeholder.svg?height=192&width=192&text=${series.image}`}
                      alt={series.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">{series.title}</h3>
                        <p className="text-white/80 text-sm">{series.count}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss a Message</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our podcast or YouTube channel to receive new sermons automatically
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                YouTube
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
                Apple Podcasts
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1.503-5.995h3.006v-3.006h-3.006v3.006zm0-4.994h3.006V5.005h-3.006v4.006z" />
                </svg>
                Spotify
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

