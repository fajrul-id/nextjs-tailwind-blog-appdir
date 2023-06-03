import Card from "@/components/BlogCard/Card";
import FeaturedCard from "@/components/Recent/RecentPostCard";
import FeaturedPosts from "@/components/Featured/Slide/FeaturedPosts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header/Navbar";
import { Posts } from "@/data/dummy";
import SearchBar from "@/components/SearchBar/SearchBar";
import RecentWidget from "@/components/Recent/RecentWidget";
import Categories from "@/components/Categories/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-10 my-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-8">
          <div className="lg:col-span-8 col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Posts?.map((e, i) => {
                return (
                  <Card
                    key={i}
                    date={String(e.createdAt)}
                    className="bg-white rounded-lg min-h-[200px] hover:shadow-lg hover:scale-105 duration-500"
                    postImage={String(e.postImage?.url)}
                    title={String(e.title)}
                    category={Object(e.categories)}
                  />
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-4 col-span-1">
            <SearchBar/>
            <Categories/>
            <RecentWidget/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
