export const RegisterFormForPage = () => {
  const INPUT_STYLE = {
    nomal:
      "disable-require w-full h-12 text-sm h-12 pl-2 flex justify-center items-center bg-transparent border-b border-th_green text-th_green placeholder-th_green cursor-pointer",
    selector: "bg-gray-500 hover:bg-gray-600 text-white",
  };
  return (
    <div className="w-full h-full mx-auto relative -mt-20 top-1/2 left-1/2 -translate-x-1/2 text-center">
      <div className="w-11/12 h-full my-16 md:my-10 flex justify-center items-center mx-auto relative z-10">
        <div
          id="register"
          className="w-full h-full pt-5 pb-0 lg:py-20 text-center bg-th_ivory"
        >
          <img
            src="/img/register.png"
            alt="register"
            className="mx-auto object-contain w-auto mb-8 lg:mb-14"
          />
          <h2 className="font-main text-th_green text-3xl md:text-4xl pb-1 lg:pb-3 px-2 md:px-0">
            Register Now
          </h2>
          <p className="font-sub text-base lg:text-xl text-th_green pb-2 lg:pb-5 px-3 md:px-0">
            1, 2, and 3 Bedroom Residences - Coming Soon
          </p>
          <form
            id="spark-registration-form"
            className="px-5 lg:px-16 py-5 bg-th_ivory w-full md:w-10/12 xl:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3 items-end gap-4 xl:gap-10 text-center text-th_green font-sub placeholder-th_green"
            action="https://spark.re/solterra-development-corporation/vivere/register/register"
            acceptCharset="UTF-8"
            method="post"
          >
            <input
              type="hidden"
              name="authenticity_token"
              value="KSd+AZc5VOeZXI4Ot79O40qQ5WaLfyRsfFNnWUw70OVzOeYl0Iz1i+NTTa+D9BqAb3eLVL5KW6pXtIPlKbUG3Q=="
              autoComplete="off"
            />

            <input
              type="hidden"
              name="authenticity_token"
              value="IVsz9sRA/BJqNHtRHhrw8LV491aqjD9sWS60CYd9ASfR3L6PhWWQERofp1gsdMlXzf09qjgS5jgtZ3foDX+hPQ=="
              autoComplete="off"
            />

            <input
              className={INPUT_STYLE.nomal}
              id="contact_first_name"
              placeholder="First Name*"
              maxLength="50"
              name="contact[first_name]"
              required
              type="text"
            />

            <input
              className={INPUT_STYLE.nomal}
              id="contact_last_name"
              placeholder="Last Name*"
              maxLength="50"
              name="contact[last_name]"
              required
              type="text"
            />

            <input
              className={INPUT_STYLE.nomal}
              id="contact_email"
              placeholder="Email*"
              maxLength="255"
              name="contact[email]"
              required
              type="email"
            />

            <input
              className={INPUT_STYLE.nomal}
              id="contact_phone"
              placeholder="Phone*"
              maxLength="255"
              name="contact[phone]"
              type="tel"
              required
            />

            <select
              name="answers[21474][answers]"
              id="answers_21474"
              className={`false ${INPUT_STYLE.nomal}`}
            >
              <option value="">Preferred method of contact</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Email">Email</option>
            </select>

            <input
              className={`ignore ${INPUT_STYLE.nomal}`}
              placeholder="Where do you currently live?"
              maxLength="255"
              name="answers[21472][answers]"
              type="text"
              id="answers_21472"
            />

            <select
              name="answers[21658][answers]"
              id="answers_21658"
              className={`false ${INPUT_STYLE.nomal}`}
              required
            >
              <option value="">
                What type of home are you interested in?*
              </option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="1 Bedroom + Flex">1 Bedroom + Flex</option>
              <option value="Jr 2 Bedroom">Jr 2 Bedroom</option>
              <option value="2 Bedroom">2 Bedroom</option>
              <option value="3 Bedroom">3 Bedroom</option>
              <option value="Townhome">Townhome</option>
              <option value="Sub-Penthouse">Sub-Penthouse</option>
              <option value="Penthouse">Penthouse</option>
            </select>

            <select
              name="answers[22108][answers]"
              id="answers_22108"
              className={`false ${INPUT_STYLE.nomal}`}
              required
            >
              <option value="">What is your price range?*</option>
              <option value="$500,000 - $600,000">$500,000 - $600,000</option>
              <option value="$600,000 - $700,000">$600,000 - $700,000</option>
              <option value="$700,000 - $800,000">$700,000 - $800,000</option>
              <option value="$800,000 - $900,000">$800,000 - $900,000</option>
              <option value="$900,000 - $1,000,000">
                $900,000 - $1,000,000
              </option>
              <option value="$1,000,000 - $1,100,000">
                $1,000,000 - $1,100,000
              </option>
              <option value="$1,100,000 - $1,200,000">
                $1,100,000 - $1,200,000
              </option>
              <option value="$1,200,000 - $1,500,000">
                $1,200,000 - $1,500,000
              </option>
              <option value="$1,500,000 - $3,000,000">
                $1,500,000 - $3,000,000
              </option>
              <option value="$3,000,000 or higher">$3,000,000 or higher</option>
            </select>

            <select
              // name="answers[21473][answers]"
              // id="answers_21473"
              id="agent"
              name="agent"
              className={` ${INPUT_STYLE.nomal}`}
              required
            >
              <option value="">Are you a realtor? *</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <select
              name="answers[21428][answers]"
              id="answers_21428"
              className={`false ${INPUT_STYLE.nomal}`}
              required
            >
              <option value="">How did you hear about Vivere? *</option>
              <option value="Signage / Walk or Drive-by">
                Signage / Walk or Drive-by
              </option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Social Media Ad">Social Media Ad</option>
              <option value="Google Ad">Google Ad</option>
              <option value="Google Search">Google Search</option>
              <option value="Solterra Social Media">
                Solterra Social Media
              </option>
              <option value="Surrey Now Leader Newspaper">
                Surrey Now Leader Newspaper
              </option>
              <option value="New Home + Condo Guide">
                New Home + Condo Guide
              </option>
              <option value="REW">REW</option>
              <option value="Realtor.ca">Realtor.ca</option>
              <option value="Livabl.com">Livabl.com</option>
              <option value="Realtor Recommendation">
                Realtor Recommendation
              </option>
              <option value="Billboard/Transit Display">
                Billboard/Transit Display
              </option>
              <option value="Radio: 93.1FM - RED FM">
                Radio: 93.1FM - RED FM
              </option>
              <option value="Radio: 94.5FM - Virgin Radio">
                Radio: 94.5FM - Virgin Radio
              </option>
              <option value="Solterra Email">Solterra Email</option>
              <option value="Other">Other</option>
            </select>
            <div className="col-start-1 col-span-1 lg:col-span-3 text-start">
              <div className="flex justify-start items-center gap-3 font-sub">
                <input type="checkbox" required name="confirm" id="" />
                <p>I confirm that I wish to receive the latest information.*</p>
              </div>
              <p className="font-sub text-xs">*Required Fields</p>
              <p className="text-xs pt-3 leading-4">
                By clicking SUBMIT below, I am permitting Solterra (Guildford 2)
                Limited Partnership and its affiliates and partners
                &quot;Solterra&quot; to contact me with information about this
                and other communities that may be of interest. I understand this
                may take the form of communication via email, telephone or post
                and consent to the collection, use and disclosure of the
                information submitted for the purposes disclosed on this page.
                If I want to receive email communication, I must give explicit
                consent via the tick box located above. I may withdraw my
                consent at any time.
              </p>
            </div>
            <button
              name="button"
              type="submit"
              className="w-fit mx-auto col-start-1 lg:col-start-2 bg-th_brown text-th_ivory hover:bg-th_gray py-3 lg:py-3 px-6 lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer"
            >
              SUBMIT
            </button>

            <input
              type="hidden"
              name="source"
              id="source"
              value="Website"
              autoComplete="off"
            />
            <input
              type="hidden"
              name="redirect_success"
              id="redirect_success"
              value=""
              autoComplete="off"
            />
            <input
              type="hidden"
              name="redirect_error"
              id="redirect_error"
              value=""
              autoComplete="off"
            />
            <input
              type="text"
              className="hidden"
              name="are_you_simulated"
              id="are_you_simulated"
              placeholder="Leave this field blank"
            />
            <input
              type="hidden"
              name="g-recaptcha-response"
              id="g-recaptcha-response"
              className="g-recaptcha-response"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
      {/* <div className='absolute -right-52 md:-right-24 xl:-right-20 -top-5 md:top-5 lg:-top-10'>
          <img src="/img/slash.png" alt="leaf_background_image" className='h-[440px] lg:h-[600px] xl:h-[780px] object-contain' />
        </div> */}
    </div>
  );
};
