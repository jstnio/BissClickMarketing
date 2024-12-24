import { Switch, Route } from "wouter";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/chat" component={Chat} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;