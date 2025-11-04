import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Postiva</span>
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
            <p>
              At Postiva, we are a passionate team of developers dedicated to crafting modern, scalable web applications. 
              From backend architecture to stunning frontend experiences, we build code that truly works.
            </p>
            
            <p>
              Our mission is to consistently bring innovative solutions to cater to our client's requirements and expectations. 
              We believe in creating digital experiences that not only meet but exceed expectations, transforming ideas into 
              reality with cutting-edge technology and creative design.
            </p>

            <p>
              With expertise spanning across full-stack development, we specialize in building robust backend systems, 
              beautiful user interfaces, and seamless integrations. Our team brings together years of experience in modern 
              web technologies, ensuring that every project we deliver is built to the highest standards.
            </p>

            <p>
              We pride ourselves on our commitment to quality, innovation, and client satisfaction. Whether you're looking 
              to build a new application from scratch, scale an existing platform, or modernize your tech stack, we're here 
              to help you succeed in the digital world.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
