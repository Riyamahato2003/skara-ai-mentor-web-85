
import React, { useState } from 'react';
import { Mic } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AudioRecorder from '../components/AudioRecorder';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const VoiceAnalysis = () => {
  const [topic, setTopic] = useState('');
  const [context, setContext] = useState('');
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioBlob) {
      toast({
        title: "Missing Recording",
        description: "Please record your voice before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);
      formData.append('tool', 'voice-analysis');
      formData.append('topic', topic);
      formData.append('context', context);

      const response = await fetch('https://roma03.app.n8n.cloud/webhook-test/c6f098d1-acd2-4826-92d0-41758d5e4efe', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Your voice analysis is being processed."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze voice. Please try again.",
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
              <Mic className="text-primary" size={24} />
            </div>
            <h1 className="text-3xl font-bold">Voice Analysis</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Interview Topic
              </label>
              <Input
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Self Introduction"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Context (Optional)
              </label>
              <Textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Add any additional context about your interview..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium mb-2">
                Record Your Answer
              </label>
              <AudioRecorder onRecordingComplete={setAudioBlob} />
              {audioBlob && (
                <p className="text-sm text-green-600">Recording completed! ✓</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || !audioBlob}
            >
              {isLoading ? "Analyzing..." : "Analyze Recording"}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default VoiceAnalysis;
