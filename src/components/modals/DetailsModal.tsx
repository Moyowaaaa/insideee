import React, { useContext, useEffect, useMemo } from "react";
import "./DetailsModal.scss";
import { Place, Review, spot } from "../../constants/types";
import otherImage from "../../assets/images/otherImage.png";
import mainImage from "../../assets/images/mainImage.png";
import ReviewCard from "../cards/ReviewCard";
import PlaceDetailsCard from "../cards/PlaceDetailsCard";
import { locationContext } from "../../context/LocationContext";
import SkeletonLoader from "../skeletons/SkeletonLoader";
import { StatesContext } from "../../context/StatesContext";
import ModalEmptyState from "./ModalEmptyState";
import EmptyState from "../skeletons/EmptyState";
import Swiper from "../skeletons/Swiper";
import CustomImageRenderer from "../skeletons/CustomImageRenderer";

const DetailsModal = ({
  type,
  onCloseModal,
}: {
  type: spot;
  onCloseModal: VoidFunction;
}) => {
  const { isFetching, setIsFetching, userLocation, setResults, results } =
    useContext(locationContext);
  const {
    setCurrentLocationIndex,
    currentLocationIndex,
    currentLocationImageIndex,
    setCurrentLocationImageIndex,
  } = useContext(StatesContext);

  useEffect(() => {
    const onHandleCardClick = async () => {
      if (!userLocation) return;

      try {
        setIsFetching(true);
        const { Place, SearchNearbyRankPreference } =
          (await google.maps.importLibrary(
            "places"
          )) as google.maps.PlacesLibrary;

        const request = {
          fields: [
            "displayName",
            "location",
            "businessStatus",
            "reviews",
            "rating",
            "regularOpeningHours",
            "formattedAddress",
            "photos",
            "addressComponents",
          ],
          locationRestriction: {
            center: userLocation,
            radius: 5000,
          },
          includedPrimaryTypes: type.interests,
          rankPreference: SearchNearbyRankPreference.POPULARITY,
          language: "en-US",
        };

        const { places } = await Place.searchNearby(request);
        setResults(places);
        setCurrentLocationIndex(0);
      } catch (error) {
        console.error("Error fetching places:", error);
      } finally {
        setIsFetching(false);
      }
    };
    onHandleCardClick();
  }, [type, userLocation]);

  const locationDetails = useMemo(() => {
    if (results) {
      return results[currentLocationIndex] as Place;
    }
    return null;
  }, [results, currentLocationIndex]);

  const processedImages = useMemo(() => {
    if (!locationDetails?.photos) return [];
    return locationDetails.photos.map((photo: any) => photo.getURI());
  }, [locationDetails?.photos]);

  const secondaryImages = useMemo(() => {
    if (processedImages.length > 1) {
      return processedImages.slice(1); // Excludes the first image
    }
    return [];
  }, [processedImages]);

  if (!locationDetails) return null;

  return (
    <>
      <div className="modal">
        <div className="modal__overlay"></div>

        <div className="modal__content-container">
          <div className="modal__content-container--title-container">
            <div className="modal__content-container--title-container__title">
              <h1>{type.name}</h1>
              {type.icon && <img src={type.icon} alt="" className="" />}
            </div>

            <div
              className="modal__content-container--title-container__close-button"
              onClick={() => onCloseModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M15.5833 6.41663L6.41663 15.5833M6.41663 6.41663L15.5833 15.5833"
                  stroke="#525252"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="modal__content-container--details-container">
            <div className="modal__content-container--details-container__main-image-container">
              {isFetching ? (
                <SkeletonLoader />
              ) : (
                <>
                  {/* <div className="modal__content-container--details-container__main-image-container--shadow1"></div>
                    <div className="modal__content-container--details-container__main-image-container--shadow2"></div> */}

                  <div className="modal__content-container--details-container__main-image-container--image">
                    <img src={processedImages[0]} alt="" />
                  </div>
                  <PlaceDetailsCard />
                </>
              )}
            </div>

            <div className="modal__content-container--details-container__other-images-container">
              {isFetching ? (
                <SkeletonLoader width={"22rem"} />
              ) : locationDetails.photos &&
                locationDetails.photos.length > 0 ? (
                <React.Fragment>
                  <CustomImageRenderer
                    image={secondaryImages[currentLocationImageIndex] as string}
                    alt=""
                  />

                  <Swiper
                    currentIndex={currentLocationImageIndex}
                    setCurrentIndex={setCurrentLocationImageIndex}
                    itemCount={locationDetails.photos.length}
                  />
                </React.Fragment>
              ) : (
                <EmptyState message="No images available for this location." />
              )}
            </div>

            <div className="modal__content-container--details-container__reviews-container">
              {isFetching ? (
                <>
                  <SkeletonLoader height={"10rem"} />
                  <SkeletonLoader height={"7rem"} />
                  <SkeletonLoader height={"2rem"} />
                </>
              ) : (
                <React.Fragment>
                  {!locationDetails.reviews?.length ? (
                    <EmptyState message="No Reviews Found here :/" />
                  ) : (
                    <React.Fragment>
                      {locationDetails.reviews?.map((review, index) => (
                        <ReviewCard
                          key={index}
                          review={review as Partial<Review>}
                        />
                      ))}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
