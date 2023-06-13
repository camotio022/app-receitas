import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importe sua instância do Firebase Firestore
import { Card } from 'your-ui-library'; // Importe as bibliotecas necessárias para exibir o Card
import { useSpring, animated } from 'react-spring'; // Importe a biblioteca de animação React Spring

const AnimatedCard = ({ imageUrl }) => {
    const [show, setShow] = useState(false);
    const animation = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <animated.div style={animation}>
            <Card>
                <img src={imageUrl} alt="Imagem" />
            </Card>
        </animated.div>
    );
};

export const ImageCardGallery = () => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const imagesRef = collection(db, 'images');
            const imagesSnapshot = await getDocs(imagesRef);
            const imagesData = imagesSnapshot.docs.map((doc) => doc.data().url);
            setImageUrls(imagesData);
        };

        fetchImages();
    }, []);

    const getRandomImageUrl = () => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    };

    return (
        <div>
            {imageUrls.map((imageUrl, index) => (
                <AnimatedCard key={index} imageUrl={imageUrl} />
            ))}
        </div>
    );
};

