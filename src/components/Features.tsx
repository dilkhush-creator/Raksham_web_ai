import { MapPin, CheckSquare, IndianRupee } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Key Features</h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Raksham’s key features streamline operations and boost workforce efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6 shadow-sm">
              <MapPin size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-3">Attendance Management</h3>
            <p className="text-gray leading-relaxed">
              Track employee attendance in real-time with geo-fencing, shift monitoring, and automated alerts for seamless management.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CheckSquare size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-3">Task Management</h3>
            <p className="text-gray leading-relaxed">
              Assign, track, and monitor tasks in real-time, ensuring efficient completion and workforce accountability.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6 shadow-sm">
              <IndianRupee size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-dark mb-3">Payroll Management</h3>
            <p className="text-gray leading-relaxed">
              Automate payroll based on attendance and overtime, ensuring accurate, timely payments and compliance with labor laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
