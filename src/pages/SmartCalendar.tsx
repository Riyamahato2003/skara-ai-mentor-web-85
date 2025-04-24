
import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Calendar } from '../components/ui/calendar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';

const SmartCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [subject, setSubject] = useState('');
  const [goal, setGoal] = useState('');
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
          tool: 'smart-calendar',
          user_input: {
            date: selectedDate?.toISOString(),
            subject,
            goal
          }
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      toast({
        title: "Success!",
        description: "Your study schedule has been created."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create schedule. Please try again.",
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
              <CalendarIcon className="text-primary" size={24} />
            </div>
            <h1 className="text-3xl font-bold">Smart Calendar</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Available Date
              </label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border mx-auto pointer-events-auto"
              />
            </div>

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
              <label className="block text-sm font-medium mb-2">Study Goal</label>
              <Input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="What do you want to achieve?"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!selectedDate || !subject || !goal || isLoading}
            >
              {isLoading ? "Creating Schedule..." : "Create Study Schedule"}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default SmartCalendar;
