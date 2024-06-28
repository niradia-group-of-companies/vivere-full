export default function AmenitiesSectionOne() {
  return (
    <div className="bg-th_green w-full">
      <div
        className="flex justify-center flex-col-reverse items-center px-20 py-20 gap-10
      xl:flex-row"
      >
        <div className="text-th_ivory font-sub flex-1 basis-1/2 flex justify-center items-center">
          <p
            className="text-sm font-sub text-center
           md:text-base
           xl:w-full xl:px-20"
          >
            The residential amenity spaces are designed to cater to various
            occasions, extending residents' home experiences. Outdoor amenities
            include dining and cooking areas, community gardens, a putting
            green, workout space, a dog park, and a children's play area.
            Indoors, residents can access a business lounge, private dining
            area, gym with steam rooms, yoga studio, and a games room.
          </p>
        </div>
        <div className="basis-1/2 flex-1 flex justify-center items-center">
          <img
            src="/img/amenities-section-1.png"
            alt="amenities-section-1.png"
          />
        </div>
      </div>
    </div>
  );
}
