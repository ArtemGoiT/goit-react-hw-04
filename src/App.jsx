import { useState, useEffect } from "react";
import fetchImages from "./components/api-img/api-img";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import ImageCard from "./components/ImageCard/ImageCard";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast, { Toaster } from "rect-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loadState, setLoadState] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    const fetcData = async () => {
      setLoadState(true);
      try {
        const { results, total } = await fetchImages(query, page);
        if (page === 1) {
          setTotalImages(results);
          setTotalImages(total);

        } else {
          setImages((prevImages) => [...prevImages, ...results]);
        }
        setLoadState(false);
        if (total === 0) {
          toast.error("Query applies to 0 images");
        }
      } catch (error) {
        setError("Error fetching images.");
        setLoadState(false);
      }
    }
    if (query !== "") {
      fetcData();
    }
  }, [query, page]);
  
  
  
  
  
  )

  return (
    <>
  
    </>
  );
}

export default App;
