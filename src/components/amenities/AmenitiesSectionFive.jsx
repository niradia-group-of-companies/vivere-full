export default function AmenitiesSectionFive() {
  return (
    <div
      className="w-full h-screen max-h-[50vh] min-h-[475px] relative amenities-section-two flex justify-center py-10 flex-col 
    xl:flex-row xl:py-20 xl:max-h-[100vh] xl:min-h-[950px]"
    >
      <div className="amenities-section-five-left flex-1 basis-1/2"></div>
      <div className="amenities-section-five-right flex-1 basis-1/2 justify-center items-center hidden xl:flex">
        <img src="/img/amenities-section-5-right.jpg" className="h-1/2" />
      </div>
    </div>
  );
}
