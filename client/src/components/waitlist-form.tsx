import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function WaitlistForm() {
  const { toast } = useToast();
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      specialty: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      await apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You've been added to the waitlist!",
      });
      form.reset();
    },
  });

  return (
    <section className="py-16 container max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Join the Waitlist</h2>
        <p className="text-muted-foreground mt-2">
          Get early access to our medical services
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Specialty (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Cardiology" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
