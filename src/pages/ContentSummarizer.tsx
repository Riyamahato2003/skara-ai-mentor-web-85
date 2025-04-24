
import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const ContentSummarizer = () => {
  const [text, setText] = useState('');
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
          tool: 'summarizer',
          user_input: {
            text
          }
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Your content is being summarized."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to summarize content. Please try again.",
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
            <h1 className="text-3xl font-bold">Content Summarizer</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Paste your text here
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter the text you want to summarize..."
                className="min-h-[200px]"
                required
              />
            </div>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">or</span>
            </div>

            <Button 
              type="button"
              variant="outline" 
              className="w-full"
              onClick={() => {
                // Handle file upload functionality
                toast({
                  title: "Coming Soon",
                  description: "File upload functionality will be available soon!"
                });
              }}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Document
            </Button>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!text || isLoading}
            >
              {isLoading ? "Summarizing..." : "Summarize Content"}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContentSummarizer;
