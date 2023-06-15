import { db } from '../../../../firebase.config';
import { collection, query, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as Tag from "./styles";

export const ShowSlider = ({ wellcome, pathPagination, backgroundMuiStack, ...props }) => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const imagesRef = collection(db, 'recipes');
            const imagesSnapshot = await getDocs(imagesRef);
            const imagesData = imagesSnapshot.docs.map((doc) => {
                return {
                    url: doc.data().recipeImage,
                    title: doc.data().recipeTitle
                };
            });
            setImageUrls(imagesData);
        };
        fetchImages();
    }, []);

    const getRandomImages = (count) => {
        const shuffledImages = [...imageUrls]; // Cria uma cópia do array original

        for (let i = shuffledImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 0.1));
            [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        }

        return shuffledImages.slice(0, count);
    };


    const randomImages = getRandomImages(4); // Exibir 5 imagens aleatórias

    return (
        <>
            <Tag.Carousel
                {...props}
                sx={{
                    minHeight: "40%",
                    marginTop: "4.1rem",
                    backgroundImage: `url(${backgroundMuiStack})`,
                    ...props
                }}
            >
                <Tag.CardImage>
                    <Carousel showThumbs={false} interval={1000}>
                        {randomImages.map((image, index) => (
                            <div key={index}>
                                <img src={image.url} alt={image.title} />
                                <p className="legend">{image.title}</p>
                            </div>
                        ))}
                    </Carousel>
                </Tag.CardImage>
            </Tag.Carousel>
        </>
    );
};
