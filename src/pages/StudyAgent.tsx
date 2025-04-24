
import React, { useState } from 'react';
import { BookOpen, Send } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const StudyAgent = () => {
  const [subject, setSubject] = useState('');
  const [preference, setPreference] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://n8n.lovable.dev/webhook/smart-study-router', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool: 'study-agent',
          user_input: {
            subject,
            learning_preference: preference
          }
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Your study plan is being generated."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
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
              <BookOpen className="text-primary" size={24} />
            </div>
            <h1 className="text-3xl font-bold">Study Agent</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                What subject are you struggling with?
              </label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                How do you prefer to learn?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Videos', 'Notes', 'Practice Questions'].map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={preference === type ? 'default' : 'outline'}
                    onClick={() => setPreference(type)}
                    className="w-full"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!subject || !preference || isLoading}
            >
              {isLoading ? (
                "Generating plan..."
              ) : (
                <>
                  Get Study Plan <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudyAgent;
