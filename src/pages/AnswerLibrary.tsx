
import React, { useState } from 'react';
import { Search, MessageSquare } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const AnswerLibrary = () => {
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://roma03.app.n8n.cloud/webhook-test/c6f098d1-acd2-4826-92d0-41758d5e4efe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool: 'answer-library',
          query,
          domain
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Retrieving answer suggestions."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch answers. Please try again.",
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
              <MessageSquare className="text-primary" size={24} />
            </div>
            <h1 className="text-3xl font-bold">Answer Library</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Question
              </label>
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., Tell me about yourself"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Select Domain
              </label>
              <Select required onValueChange={setDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || !query || !domain}
            >
              {isLoading ? "Searching..." : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Search Answers
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default AnswerLibrary;
