
import { Shield } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section className="py-14 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-white to-skara-blue/5 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-16 h-16 rounded-full glass flex items-center justify-center shrink-0">
            <Shield className="h-8 w-8 text-skara-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Privacy First</h2>
            <p className="text-foreground/70">
              At Skara, we prioritize your privacy. Your study data and personal information are 
              fully encrypted and never shared with third parties. We're here to help you learn, 
              not to monetize your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
