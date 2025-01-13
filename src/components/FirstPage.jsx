import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const FirstPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Technology", icon: "💻" },
    { name: "Design", icon: "🎨" },
    { name: "Healthcare", icon: "🩺" },
    { name: "Business", icon: "📈" },
    { name: "More...", icon: "🔍" },
  ];

  const handleCategoryClick = (category) => {
    alert(`You selected: ${category}`);
    // Navigate to the category details page here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
        <Typography variant="h4" color="blue-gray" className="font-bold">
          AspirationTrail
        </Typography>
        <div className="flex space-x-4">
          <Button variant="text" className="text-blue-500">
            Sign In
          </Button>
          <Button variant="gradient" color="blue">
            Sign Up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-10 px-4 w-full">
        {/* Welcome Message */}
        <Typography
          variant="h3"
          className="text-blue-gray-800 font-semibold mb-4"
        >
          Welcome! Start your career journey today.
        </Typography>

        {/* Search Bar */}
        <div className="w-full max-w-lg mb-8">
          <Input
            type="text"
            color="blue"
            label="Search Careers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center shadow-md p-6 cursor-pointer hover:shadow-lg hover:bg-gray-50 transition-all"
              onClick={() => handleCategoryClick(category.name)}
            >
              <Typography variant="h2" className="text-4xl mb-4">
                {category.icon}
              </Typography>
              <Typography variant="h6" className="text-blue-gray-700">
                {category.name}
              </Typography>
            </Card>
          ))}
        </div>

        {/* Start Journey Button */}
        <Button variant="gradient" color="green" size="lg" className="mt-10">
          Choose Your Career Path
        </Button>
      </main>
    </div>
  );
};

export default FirstPage;
