
import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const ResumeReview = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobRole, setJobRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "Missing Resume",
        description: "Please upload your resume before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('resume', file);
      formData.append('tool', 'resume-review');
      formData.append('job_role', jobRole);

      const response = await fetch('https://roma03.app.n8n.cloud/webhook-test/c6f098d1-acd2-4826-92d0-41758d5e4efe', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Your resume is being reviewed."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="container max-w-2xl mx-auto px-4 py-16">
        <div className="glass-card p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="text-primary" size={24} />
            </div>
            <h1 className="text-3xl font-bold">Resume Review</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Target Job Role
              </label>
              <Input
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                placeholder="e.g., Software Developer"
                required
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium mb-2">
                Upload Resume
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="resume-upload"
                />
                <label 
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="mb-2 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {file ? file.name : "Click to upload your resume (PDF or DOCX)"}
                  </span>
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || !file}
            >
              {isLoading ? "Uploading..." : "Review Resume"}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumeReview;
