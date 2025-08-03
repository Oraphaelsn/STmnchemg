import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const miniContactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  city: z.string().min(2, "Cidade deve ter pelo menos 2 caracteres"),
});

type MiniContactData = z.infer<typeof miniContactSchema>;

export default function MiniContactForm() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<MiniContactData>({
    resolver: zodResolver(miniContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: MiniContactData) => {
      const fullData = {
        ...data,
        email: "contato-urgente@temp.com", // Temporary email for mini form
        subject: "Contato Urgente - Formulário Rápido",
        message: `Contato urgente de ${data.name} da cidade ${data.city}. Telefone: ${data.phone}`,
        privacyConsent: true
      };
      const response = await apiRequest("POST", "/api/contact", fullData);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Sucesso!",
        description: "Nossa equipe entrará em contato em até 15 minutos!",
      });
      form.reset();
      setIsOpen(false);
      // Redirect to WhatsApp as backup
      window.open(`https://wa.me/5515997559520?text=Olá,%20sou%20${form.getValues('name')}%20de%20${form.getValues('city')}%20e%20preciso%20de%20informações%20urgentes%20sobre%20internação`, '_blank');
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: "Erro no formulário. Redirecionando para WhatsApp...",
        variant: "destructive",
      });
      // Fallback to WhatsApp
      window.open(`https://wa.me/5515997559520?text=Olá,%20preciso%20de%20informações%20urgentes%20sobre%20internação`, '_blank');
    },
  });

  const onSubmit = (data: MiniContactData) => {
    contactMutation.mutate(data);
  };

  if (!isOpen) {
    return (
      <div className="fixed top-20 right-4 z-50 animate-bounce">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[hsl(20,90%,48%)] to-[hsl(20,90%,43%)] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A3,3 0 0,1 15,5V6.5C15,7.3 14.3,8 13.5,8H12V10.5A0.5,0.5 0 0,1 11.5,11A0.5,0.5 0 0,1 11,10.5V8H9.5C8.7,8 8,7.3 8,6.5V5A3,3 0 0,1 11,2H12M12,4A1,1 0 0,0 11,5V6H13V5A1,1 0 0,0 12,4M12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13M12,14A1,1 0 0,0 11,15A1,1 0 0,0 12,16A1,1 0 0,0 13,15A1,1 0 0,0 12,14M7,19H17V18A5,5 0 0,0 12,13A5,5 0 0,0 7,18V19M5,19V18A7,7 0 0,1 12,11A7,7 0 0,1 19,18V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19Z"/>
          </svg>
          Quero Falar com Especialista
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-50 bg-white rounded-xl shadow-2xl p-6 w-80 border-2 border-[hsl(20,90%,48%)]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Contato Urgente</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="bg-[hsl(20,90%,97%)] p-3 rounded-lg mb-4">
        <p className="text-sm text-[hsl(20,90%,39%)] font-medium">
          ⚡ Nossa equipe responderá em até 15 minutos
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Sua cidade" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-[hsl(20,90%,48%)] hover:bg-[hsl(20,90%,43%)] text-white"
            disabled={contactMutation.isPending}
          >
            {contactMutation.isPending ? (
              "Enviando..."
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                </svg>
                Quero Falar com Especialista
              </>
            )}
          </Button>
          
          <div className="text-center">
            <a 
              href="https://wa.me/5515997559520?text=Olá,%20preciso%20de%20informações%20urgentes%20sobre%20internação" 
              className="text-green-600 hover:underline text-sm flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
              Ou fale diretamente no WhatsApp
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}