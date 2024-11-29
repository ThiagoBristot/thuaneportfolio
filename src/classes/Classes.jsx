import React from 'react';
import styled from 'styled-components';

const ClassesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  padding: 4rem;
  background-color: #ffffff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-top: 4rem;
`;

const ClassesHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: #2a3d34;
  }

  p {
    font-size: 1.1rem;
    color: #4a4a4a;
    line-height: 1.6;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f7f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: #e3e9ee;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom: 1px solid #d4d4d4;
  }
`;

const Description = styled.div`
  padding: 1rem;
  text-align: center;
  color: #555;
  font-size: 0.9rem;
  font-weight: 500;

  p {
    margin: 0;
  }
`;

const Classes = () => {
  return (
    <ClassesContainer>
      <ClassesHeader>
        <h2>Aulas</h2>
        <p>Oferecemos aulas personalizadas de Pilates e Yoga que ajudam no equilíbrio entre corpo e mente...</p>
      </ClassesHeader>
      <Gallery>
        
      <GalleryItem>
          <MediaContainer>
            <img src="" alt="img" />
          </MediaContainer>
          <Description>
            <p>Descrição da imagem aqui</p>
          </Description>
        </GalleryItem>
        
        <GalleryItem>
          <MediaContainer>
            <img src="" alt="img" />
          </MediaContainer>
          <Description>
            <p>Descrição da imagem aqui</p>
          </Description>
        </GalleryItem>
                
        <GalleryItem>
          <MediaContainer>
            <video src="" controls></video>
          </MediaContainer>
          <Description>
            <p>Descrição do vídeo aqui</p>
          </Description>
        </GalleryItem>

        <GalleryItem>
          <MediaContainer>
            <video src="" controls></video>
          </MediaContainer>
          <Description>
            <p>Descrição do vídeo aqui</p>
          </Description>
        </GalleryItem>

        <GalleryItem>
          <MediaContainer>
            <img src="" alt="img" />
          </MediaContainer>
          <Description>
            <p>Descrição da imagem ou vídeo aqui</p>
          </Description>
        </GalleryItem>

      </Gallery>
    </ClassesContainer>
  );
};

export default Classes;