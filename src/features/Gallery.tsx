import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export function Gallery() {
  // Add your images here...
  const items = [
    {
      // Image item:
      itemId: "sample-id",
      mediaUrl: window.location.origin + "/images/img1.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        height: 1080,
        width: 1080,
      },
    },
    {
      // Another Image item:
      itemId: "differentItem1",
      mediaUrl: window.location.origin + "/images/img2.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        height: 2838,
        width: 3721,
      },
    },
    {
      // Another Image item:
      itemId: "differentItem2",
      mediaUrl: window.location.origin + "/images/img3.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        height: 2151,
        width: 1903,
      },
    },
    {
      // Another Image item:
      itemId: "differentItem3",
      mediaUrl: window.location.origin + "/images/img4.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        height: 1080,
        width: 1080,
      },
    },
    {
      // Another Image item:
      itemId: "differentItem4",
      mediaUrl: window.location.origin + "/images/img5.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        height: 3492,
        width: 2995,
      },
    },
    {
      // Another Image item:
      itemId: "differentItem5",
      mediaUrl: window.location.origin + "/images/img6.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        height: 710,
        width: 696,
      },
    },
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 0,
        itemSpacing: 10,
      },
      targetItemSize: {
        unit: "smart",
      },
    },
    behaviourParams: {
      item: {
        overlay: {
          hoveringBehaviour: "NEVER_VISIBLE",
        },
      },
    },
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName: any, eventData: any) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}
