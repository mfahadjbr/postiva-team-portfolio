import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

// Helper function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const allProjects = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online marketplace with payment integration and inventory management.",
    longDescription: "Our E-Commerce Platform is a comprehensive online marketplace solution designed to revolutionize the way businesses sell their products online. Built with modern technologies including React for the frontend and Node.js for the backend, this platform offers seamless payment integration with multiple payment gateways, comprehensive inventory management systems, and real-time order tracking. The platform features a responsive design that works flawlessly across all devices, advanced search and filtering capabilities, personalized shopping experiences, and robust admin dashboard for managing products, orders, and customer relationships. With PostgreSQL as the database, we ensure data integrity, scalability, and high performance even under heavy traffic loads.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 2,
    slug: "healthcare-dashboard",
    title: "Healthcare Dashboard",
    description: "Real-time analytics dashboard for healthcare providers with patient management features.",
    longDescription: "The Healthcare Dashboard is an advanced analytics and patient management system designed specifically for healthcare providers. This comprehensive platform offers real-time monitoring of patient vitals, medication schedules, appointment management, and comprehensive health records. Built with TypeScript and Next.js, the dashboard provides interactive charts and visualizations using Chart.js, enabling healthcare professionals to make data-driven decisions. The system includes secure patient data management, HIPAA-compliant architecture, telemedicine integration capabilities, and automated appointment scheduling. With its intuitive interface, healthcare providers can efficiently manage patient care, track treatment progress, and generate comprehensive health reports.",
    tags: ["TypeScript", "Next.js", "Chart.js"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999e8?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 3,
    slug: "fintech-mobile-app",
    title: "FinTech Mobile App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    longDescription: "Our FinTech Mobile App represents the pinnacle of secure mobile banking technology. Developed using React Native for cross-platform compatibility, this application offers bank-level security with biometric authentication including fingerprint and face recognition. The app features real-time transaction processing, instant notifications, multi-currency support, and comprehensive financial analytics. Integrated with Firebase for real-time data synchronization and Stripe for secure payment processing, users can manage their finances, transfer money, pay bills, and track spending all from their mobile device. The app includes advanced fraud detection, secure encryption, two-factor authentication, and seamless integration with banking APIs for a truly secure and convenient banking experience.",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 4,
    slug: "ai-powered-crm",
    title: "AI-Powered CRM",
    description: "Customer relationship management system with AI-driven insights and automation.",
    longDescription: "The AI-Powered CRM is a next-generation customer relationship management system that leverages artificial intelligence to transform how businesses interact with their customers. Built with Python and powered by TensorFlow machine learning models, this CRM system provides intelligent lead scoring, automated customer segmentation, predictive analytics for sales forecasting, and AI-powered chatbots for customer support. The platform includes comprehensive contact management, sales pipeline tracking, email marketing automation, and detailed analytics dashboards. Containerized with Docker for easy deployment and scalability, the system integrates seamlessly with existing business tools and provides actionable insights that help sales teams close deals faster and improve customer satisfaction rates.",
    tags: ["Python", "TensorFlow", "Docker"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 5,
    slug: "social-media-platform",
    title: "Social Media Platform",
    description: "Modern social networking application with real-time messaging and content sharing.",
    longDescription: "Our Social Media Platform is a cutting-edge social networking application that brings people together through seamless communication and content sharing. Built with React for a responsive user interface and powered by WebSockets for real-time messaging capabilities, users can share posts, photos, videos, and stories instantly. The platform features advanced privacy controls, content moderation tools, live streaming capabilities, and interactive engagement features like comments, likes, and shares. With MongoDB as the database, the platform handles massive amounts of user-generated content with ease. The application includes personalized news feeds, group chat functionality, event management, and comprehensive analytics for content creators to track their engagement and reach.",
    tags: ["React", "WebSockets", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 6,
    slug: "learning-management-system",
    title: "Learning Management System",
    description: "Comprehensive LMS with video streaming, assessments, and progress tracking.",
    longDescription: "The Learning Management System is a comprehensive educational platform designed to deliver engaging and effective online learning experiences. Built with Angular for a dynamic frontend and Express.js for a robust backend, this LMS offers high-quality video streaming with adaptive bitrate technology, interactive assessments with automated grading, and detailed progress tracking for both students and instructors. The system includes course creation tools, assignment management, discussion forums, certification generation, and integration with popular video conferencing tools for live classes. With MySQL as the database, the platform efficiently manages student records, course content, grades, and learning analytics. The system supports multiple learning formats including videos, documents, quizzes, and interactive assignments, making it suitable for educational institutions and corporate training programs.",
    tags: ["Angular", "Express", "MySQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
  {
    id: 7,
    slug: "e-commerce-platform-2",
    title: "E-Commerce Platform",
    description: "A full-featured online marketplace with payment integration and inventory management.",
    longDescription: "This second iteration of our E-Commerce Platform builds upon our previous success with enhanced features and improved performance. The platform now includes advanced AI-powered product recommendations, multi-vendor marketplace capabilities, subscription management, and comprehensive analytics dashboard. Built with React for a modern user experience and Node.js for scalable backend services, this version offers improved inventory management with automated reordering, advanced shipping options, and international payment gateway support. The PostgreSQL database has been optimized for faster queries and better data organization, while new features like wishlist management, product comparisons, and customer reviews enhance the shopping experience for both buyers and sellers.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ]
  },
];

const Projects = () => {
  const displayProjects = allProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Showcasing our best work and the impact we've made for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {displayProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-fill transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground group-hover:text-[#18675b] transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Link to={`/project/${project.slug}`} className="w-full">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              Show All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
