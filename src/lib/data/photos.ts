import type { Photo } from "@/lib/types";

/**
 * Real dimensions are stored per photo so the masonry grid renders each
 * image at its true aspect ratio (aspect: "auto") rather than cropping it
 * into a fixed box.
 */
export const photos: Photo[] = [
  { id: "ph-01", alt: "Photograph 1", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-01.jpg", width: 3890, height: 1841 },
  { id: "ph-02", alt: "Photograph 2", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-02.jpg", width: 4032, height: 3024 },
  { id: "ph-03", alt: "Photograph 3", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-03.jpg", width: 4032, height: 3024 },
  { id: "ph-04", alt: "Photograph 4", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-04.jpg", width: 4032, height: 3024 },
  { id: "ph-05", alt: "Photograph 5", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-05.jpg", width: 3024, height: 4032 },
  { id: "ph-06", alt: "Photograph 6", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-06.jpg", width: 4032, height: 3024 },
  { id: "ph-07", alt: "Photograph 7", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-07.jpg", width: 4032, height: 3024 },
  { id: "ph-08", alt: "Photograph 8", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-08.jpg", width: 3024, height: 4032 },
  { id: "ph-09", alt: "Photograph 9", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-09.jpg", width: 3024, height: 4032 },
  { id: "ph-10", alt: "Photograph 10", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-10.jpg", width: 3024, height: 4032 },
  { id: "ph-11", alt: "Photograph 11", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-11.jpg", width: 3024, height: 4032 },
  { id: "ph-12", alt: "Photograph 12", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-12.jpg", width: 2966, height: 1565 },
  { id: "ph-13", alt: "Photograph 13", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-13.jpg", width: 4032, height: 2326 },
  { id: "ph-14", alt: "Photograph 14", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-14.jpg", width: 3024, height: 4032 },
  { id: "ph-15", alt: "Photograph 15", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-15.jpg", width: 3024, height: 4032 },
  { id: "ph-16", alt: "Photograph 16", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-16.jpg", width: 4032, height: 2547 },
  { id: "ph-17", alt: "Photograph 17", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-17.jpg", width: 4032, height: 3024 },
  { id: "ph-18", alt: "Photograph 18", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-18.jpg", width: 3024, height: 3343 },
  { id: "ph-19", alt: "Photograph 19", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-19.jpg", width: 3024, height: 4032 },
  { id: "ph-20", alt: "Photograph 20", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-20.jpg", width: 4032, height: 3024 },
  { id: "ph-21", alt: "Photograph 21", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-21.jpg", width: 3024, height: 4032 },
  { id: "ph-22", alt: "Photograph 22", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-22.jpg", width: 4032, height: 3024 },
  { id: "ph-23", alt: "Photograph 23", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-23.jpg", width: 3024, height: 4032 },
  { id: "ph-24", alt: "Photograph 24", label: "ADD PHOTOGRAPHY IMAGE", aspect: "auto", src: "/images/photography/photo-24.jpg", width: 3024, height: 4032 },
];

export const PHOTOGRAPHY_SOURCE_URL = "/documents/kylie-perales-photography.pdf";
