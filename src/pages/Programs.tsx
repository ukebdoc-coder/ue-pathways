import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { programs, categories } from "@/data/programs";
import { Search } from "lucide-react";

const Programs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredPrograms = programs.filter((program) => {
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Discover the perfect program to advance your career and achieve your educational goals
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-secondary sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          {filteredPrograms.length > 0 ? (
            <>
              <div className="mb-6 text-center text-muted-foreground">
                Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? "s" : ""}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No programs found matching your criteria
              </p>
              <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
