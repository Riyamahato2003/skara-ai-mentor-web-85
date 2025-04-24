
import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const QuizGenerator = () => {
  const [subject, setSubject] = useState('');
  const [difficulty, setDifficulty] = useState('');
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
          tool: 'quiz-generator',
          user_input: {
            subject,
            difficulty
          }
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Your quiz is being generated."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate quiz. Please try again.",
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
            <h1 className="text-3xl font-bold">Quiz Generator</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Select Difficulty
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Easy', 'Medium', 'Hard'].map((level) => (
                  <Button
                    key={level}
                    type="button"
                    variant={difficulty === level ? 'default' : 'outline'}
                    onClick={() => setDifficulty(level)}
                    className="w-full"
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!subject || !difficulty || isLoading}
            >
              {isLoading ? "Generating Quiz..." : "Generate Quiz"}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default QuizGenerator;
