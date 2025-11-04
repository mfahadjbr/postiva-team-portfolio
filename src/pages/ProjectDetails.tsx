import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { allProjects } from "@/components/Projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = allProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Use individual project images or fallback to main image
  const projectImages = project.images || [project.image];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {project.longDescription || project.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary text-secondary-foreground text-xs sm:text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border border-border hover:shadow-[var(--shadow-glow)] transition-all duration-300 group"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 sm:pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
