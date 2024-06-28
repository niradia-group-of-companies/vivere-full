export default function AmenitiesSectionFive() {
  return (
    <div
      className="w-full h-screen max-h-[100vh] min-h-[950px] relative amenities-section-two flex justify-center py-10 flex-col 
    xl:flex-row xl:py-20"
    >
      <div className="amenities-section-five-left flex-1 basis-1/2"></div>
      <div className="amenities-section-five-right flex-1 basis-1/2 flex justify-center items-center">
        <img src="/img/amenities-section-5-right.jpg" className="h-1/2" />
      </div>
    </div>
  );
}
