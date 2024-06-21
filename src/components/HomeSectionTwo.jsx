export const HomeSectionTwo = () => {
  return (
    <div className="w-full h-screen max-h-[50vh] relative home-section-two flex flex-col justify-center p-24">
      <div className="relative">
        <h3 className="text-th_green text-4xl font-semibold tracking-wider relative top-10">
          LIVE
        </h3>
        <div className="text-th_green flex relative left-6">
          <svg
            width="364"
            height="162"
            viewBox="0 0 364 162"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.09091 102.455C4.72727 101.727 0.909091 98.6364 1.27273 93.7273C1.27273 93 4.18182 84.4545 4.72727 83.3636C6 80.8182 7.63636 78.0909 9.27273 75.7273C11.2727 72.2727 18.7273 62.6364 20.5455 61.5455C22 60.4545 26.1818 58.4545 28.1818 58.0909C30.1818 57.5455 32.9091 58.2727 33.2727 60.2727C33.4545 61.9091 32.1818 63.9091 31.2727 65.3636L30.1818 67.7273C29.6364 68.4545 28.9091 68.8182 28.7273 69.5455C28.3636 70.4545 28.9091 71.3636 28.7273 71.7273C28 72.2727 26.1818 71.5455 25.6364 71.3636C22.5455 69.7273 24.9091 67 26.5455 64.8182C26.9091 64.0909 27.2727 63.7273 28 62.8182C28.3636 61.9091 31.0909 59.3636 27.8182 61.1818C24.7273 63 23.2727 64.6364 21.0909 67C20.5455 67.3636 20 67.5455 19.8182 67.9091C19.6364 68.0909 19.8182 68.4545 19.6364 68.6364C19.2727 69 18.3636 69.5455 18 70.2727C16.5455 72.4545 13.2727 75.3636 12 77.9091C10.1818 80.2727 8.72727 83 7.63636 86.0909C6.18182 89 4.36364 94.4545 6 98.6364C7.27273 102.273 12.7273 100.636 16 99.5455C21.6364 97 26.5455 93.5455 31.0909 90.6364C35.4545 87.5455 40.3636 83.9091 45.0909 80.4545C48.3636 78.0909 55.2727 72.6364 54.5455 72.6364C55.8182 72.0909 56.9091 72.6364 57.0909 73.7273C57.0909 75 51.8182 79.7273 49.2727 81.5455C44.5455 85.1818 39.6364 89.1818 34.5455 92.2727C29.0909 95.7273 24.7273 98.4545 18.5455 100.818C15.6364 101.909 12.9091 103 9.09091 102.455ZM206.716 33C208.534 33.5455 210.716 34.4545 210.171 35.5455C209.444 37 205.262 35.1818 204.716 35C202.353 34.6364 198.534 34.8182 195.08 34.8182C184.353 34.8182 174.353 35.3636 163.625 36.2727C162.353 38.6364 161.262 40.6364 160.898 41.5455C158.353 47.7273 155.989 54.0909 153.625 60.8182C152.898 63 151.989 64.8182 151.444 67.1818C149.262 72.4545 148.171 77.1818 146.171 82.8182C145.625 84.6364 135.989 119.364 135.989 122.091C135.807 123.727 136.353 126.091 135.625 126.818C133.807 128.091 130.171 125.727 130.171 124.455C130.171 123.545 131.262 121.545 131.444 121C131.807 120.091 147.262 72.6364 150.716 63.3636C151.08 62.6364 151.262 61.7273 151.625 60.8182C152.534 58.4545 153.444 55.7273 154.534 53C155.262 51.1818 156.716 47.9091 156.716 47.5455C156.353 47 154.534 50.2727 156.171 48.0909C153.807 51.3636 149.989 57.3636 148.171 60.0909C145.08 64.2727 142.353 68.0909 139.08 72.2727C135.807 76.4545 132.534 80.0909 129.08 83.3636C125.807 86.4545 121.08 90.0909 115.807 90.6364C109.08 91.3636 106.353 86.8182 105.989 81.3636C105.989 79.9091 105.989 78.8182 106.171 77.1818C105.989 75.5455 106.716 71.9091 105.08 73.5455C99.6254 79.3636 95.2617 86.2727 90.7163 93C89.6254 94.6364 87.2617 99.3636 85.6254 99.5455C84.7163 99.7273 83.4435 98.6364 83.4435 98.2727C83.2617 97.3636 85.6254 92.8182 85.989 91.9091C89.0799 84.6364 91.989 77 94.5344 70.0909C94.8981 69 96.1708 65.9091 94.3526 68.0909C91.2617 71.9091 84.7163 79.5455 81.2617 83.1818C78.8981 85.7273 76.3526 88.4545 73.6254 90.8182C70.8981 93.1818 67.8072 95.9091 65.2617 97.3636C62.7163 98.8182 59.6254 99.9091 56.1708 99.5455C49.989 99 46.7163 94.2727 47.8072 87.3636C48.3526 84.8182 48.8981 83.1818 49.8072 79.7273C51.2617 76.6364 57.4435 66.4545 63.0799 64.8182C66.8981 63.9091 72.3526 66.0909 70.3526 71.5455C69.8072 72.8182 69.0799 73.7273 68.3526 74.6364C65.6254 78.2727 59.989 81.9091 54.8981 83.9091C54.1708 84.2727 52.8981 84.6364 52.5344 84.8182C51.989 85.5455 51.8072 89.1818 51.8072 89.5455C51.6254 92.4545 52.5344 96.0909 54.1708 96.6364C56.8981 97.3636 59.8072 95.5455 61.8072 94.4545C67.8072 90.8182 72.7163 85.3636 77.4435 80.4545C81.989 75.5455 86.8981 70.0909 91.4435 64.6364C92.7163 63.1818 94.8981 59.9091 96.3526 59.5455C97.8072 59.1818 99.8072 60.2727 100.171 61.3636C100.171 62.0909 99.4435 64.0909 98.8981 65.3636C97.8072 67.7273 96.7163 69.9091 95.6254 72.4545C94.3526 75.7273 93.2617 77.9091 91.989 81.3636C91.4435 82.8182 89.8072 86.6364 91.4435 84.6364C93.0799 82.2727 94.7163 79.3636 96.5344 77.1818C97.2617 75.9091 98.7163 74.4545 99.6254 73.3636C100.898 71.9091 101.989 70.4545 103.08 69.7273C104.898 68.4545 108.353 69 109.262 71C109.989 72.6364 109.625 75.9091 109.807 78.6364C109.625 81.3636 109.625 83.9091 110.534 85.7273C110.898 87 111.444 87.9091 112.534 88.0909C115.262 88.6364 119.807 85.5455 121.807 83.9091C129.807 77.9091 135.262 69.9091 141.444 61.7273C145.08 56.8182 151.08 46.2727 156.353 36.8182C155.807 36.8182 155.262 37 154.534 37C151.262 37.3636 147.989 37.3636 144.898 37.5455C131.807 38.6364 117.08 40.6364 106.716 43.1818C103.989 43.9091 98.3526 44.8182 97.989 41.7273C97.8072 40.2727 99.8072 37.7273 101.807 37.3636C104.171 37 106.716 38.4545 106.716 39.1818C106.716 39.5455 103.989 41.1818 104.353 41.5455C104.716 41.9091 108.534 40.6364 109.807 40.4545C125.262 38.0909 141.444 36.2727 157.444 34.8182C161.989 27 165.625 20.2727 166.353 18.8182C167.807 16.0909 170.171 12.0909 172.171 11.7273C173.262 11.3636 175.262 12.2727 175.444 13.3636C175.625 13.9091 175.08 14.6364 174.898 15.5455C173.08 19.5455 168.353 27.9091 164.716 34.2727L172.353 33.7273C179.807 33.1818 183.08 32.6364 190.534 32.2727C193.444 32.0909 202.716 31.7273 206.716 33ZM56.1708 76.8182C55.0799 78.6364 53.8072 80.6364 56.1708 79.3636C57.6254 78.6364 59.2617 77.1818 59.989 76.6364C62.5344 74.6364 66.3526 70.6364 66.1708 67.9091C66.1708 67.5455 65.989 67.9091 65.8072 67.9091C65.0799 67.5455 62.8981 69.1818 62.3526 69.5455C60.3526 71.1818 57.8072 74.2727 56.1708 76.8182ZM155.616 104.636C154.162 105.182 152.162 103.909 151.98 103.182C151.798 102.455 152.889 99.9091 153.616 97.7273C155.253 93.3636 156.707 90.0909 158.344 85.9091C158.707 85.1818 158.889 84.8182 159.071 84.0909C159.98 82.6364 160.707 79.1818 161.616 77.3636C162.162 76.6364 161.98 76.4545 162.162 75.3636C162.344 75 162.707 74.2727 162.889 73.7273C162.889 73.3636 162.889 72.8182 163.071 72.4545C165.071 67.5455 166.162 66.2727 167.798 60.4545C168.344 59.3636 168.707 58.2727 169.253 58.0909C169.798 57.9091 172.889 57.9091 173.253 59.5455C173.435 60.0909 172.889 62.0909 172.526 62.8182C172.344 63.1818 171.253 63.1818 170.889 63.7273C170.707 64.0909 170.344 65.5455 170.162 66.0909C168.344 69.7273 167.616 68.8182 165.98 73C165.253 75.1818 165.616 75.3636 164.889 76.6364C164.889 76.6364 164.162 77.1818 164.344 77.5455C164.526 77.7273 166.526 75.5455 166.526 75.3636C167.435 74.4545 167.435 73.7273 168.526 72.8182C174.162 67.9091 180.889 72.8182 188.889 72.4545C193.071 72.4545 195.253 72.0909 198.344 70.6364C199.253 70.0909 199.98 69.1818 200.707 69C201.798 68.8182 204.344 69.3636 204.526 70.6364C204.526 72.2727 200.344 73.7273 199.071 74.2727C195.435 75.5455 193.98 75.1818 189.071 75.1818C185.071 74.8182 181.435 73.9091 177.616 73.5455C176.526 73.3636 175.071 73.5455 174.344 73.9091C171.253 75.7273 167.98 81 165.616 84.0909C162.526 89.1818 159.98 94.6364 157.616 100.636C157.071 102.273 156.162 104.455 155.616 104.636ZM221.956 103.182C220.683 103 219.41 102.273 218.683 101.727C215.047 98.2727 217.41 88.4545 219.047 83.7273C222.683 74.6364 222.683 74.4545 221.228 75.9091C217.41 79.5455 213.956 83.5455 209.956 86.8182C208.137 88.4545 206.137 90.6364 203.228 90.8182C199.774 91 197.41 87.9091 198.501 85C200.137 81 204.137 74.6364 205.956 72.8182C208.319 70.8182 210.137 69.1818 212.865 67.3636C214.865 66.0909 217.047 65 219.956 65.7273C220.865 65.9091 222.501 66.8182 222.683 66.8182C224.683 66.6364 225.047 63.7273 227.41 63.3636C228.501 63.1818 231.047 63.5455 231.228 65C231.228 65.7273 230.683 66.2727 230.137 67C229.774 67.3636 228.683 68.2727 228.683 68.6364C228.501 69.3636 229.956 69.7273 229.41 70.6364C229.047 71.1818 228.137 70.4545 227.228 71C226.501 71.3636 225.047 74.0909 224.683 75C222.501 79.1818 220.683 84.2727 219.956 88.6364C219.956 88.4545 219.228 94.6364 219.41 96.2727C219.592 97.3636 220.137 100.818 221.047 101C223.047 101.727 225.228 99.5455 225.956 99C233.956 92.6364 242.137 84.8182 248.319 76.8182C249.592 75.3636 251.047 72.6364 251.956 72.4545C253.592 72.4545 253.228 73 253.228 73.9091C253.41 74.6364 250.683 78.4545 250.137 79.1818C244.865 85.7273 238.865 92.6364 231.956 98.2727C229.41 100.455 225.956 103.545 221.956 103.182ZM203.956 86.2727C207.41 86.0909 209.592 83.1818 211.228 81.3636C214.319 78.2727 216.501 73.9091 219.592 70.6364C219.956 70.2727 221.774 68.4545 221.592 68.0909C221.41 67.5455 219.592 67.9091 219.228 67.9091C217.774 68.0909 216.319 68.6364 215.228 69.3636C211.41 71.7273 207.228 77.1818 205.228 81C204.683 82.0909 202.501 87.5455 203.956 86.2727ZM304.837 136.455C304.11 138.273 299.564 135.545 299.019 134.818C298.11 133.545 297.564 130.636 297.382 129C296.655 124.636 296.837 120.273 297.019 116.455C297.564 110.636 298.473 105.545 299.564 100.636C300.292 97.7273 300.837 94.6364 301.564 91.3636C302.11 88.8182 303.201 85.1818 303.928 82.0909C304.292 80.6364 304.473 79.3636 305.019 77.1818C305.382 75.9091 306.655 73.9091 305.746 73.1818C302.11 76.8182 298.837 81.1818 295.564 84.6364C287.564 93.1818 281.201 100.091 271.928 107.364C270.11 108.818 267.746 110.636 265.019 112.091C262.473 113.545 259.564 115.182 256.473 115C249.382 114.636 246.837 107.545 246.473 99.7273C246.292 98.2727 246.473 96.2727 246.655 94.2727C246.655 93.7273 247.019 93.3636 247.019 92.8182C247.201 92.2727 247.019 91.7273 247.019 91.1818C247.201 90.2727 247.564 89.3636 247.746 88.4545C248.292 86.4545 248.655 84.2727 249.201 82.2727L251.019 76.4545C251.019 76.2727 252.837 71.3636 252.655 71C252.655 70.4545 253.564 69.1818 253.201 69.5455C252.473 69.9091 251.564 69.5455 251.019 69.1818C250.655 69 249.564 68.4545 249.564 67.9091C249.382 66.8182 252.473 65.1818 253.019 64.8182C255.201 63 254.837 63.3636 255.382 62.2727L257.201 59.3636C258.473 57.1818 259.382 54.2727 260.473 51.7273C261.382 49.3636 262.11 47 263.019 44.6364C263.928 42.2727 265.019 39.7273 266.11 37.3636C267.564 33.9091 269.201 30.4545 271.019 27C272.11 24.8182 273.382 22.6364 274.655 20.4545L275.746 18.8182C277.746 15.1818 280.292 11.5454 283.019 8.27273C284.655 6.45455 286.655 3.18182 289.564 2.81818C291.746 2.63637 294.11 3.90909 294.473 5.18182C295.019 6.63636 293.746 8.81818 293.201 10.2727C290.292 18.2727 286.11 23.9091 282.11 30.6364C277.201 38.8182 272.837 45.7273 267.382 53.7273C265.019 57.1818 262.11 61.1818 259.201 64.4545C258.11 65.5455 256.655 66.6364 256.292 67.7273C255.928 68.2727 255.564 69.5455 255.201 70.4545C254.292 73 253.564 75.9091 252.655 78.6364C251.746 81.3636 251.201 84.2727 250.655 87C250.473 87.7273 250.11 88.4545 249.928 89.1818V91.5455C249.564 93.7273 249.019 96.8182 249.382 100.091C249.746 104.273 251.746 111.727 254.292 112.455C255.382 112.818 258.11 111.727 259.201 111.182C264.655 108.636 269.564 104.273 274.11 100.091C277.564 96.8182 280.655 93.9091 283.928 90.4545C292.292 81.7273 300.11 72.4545 308.11 62.8182C309.201 61.5455 309.019 61.5455 309.564 60.4545C310.11 59.3636 311.019 56.4545 311.564 55.1818C313.019 51.3636 314.292 47.5455 315.746 43.7273C319.564 33.9091 323.746 24.0909 328.655 15C329.382 13.9091 337.201 1.90909 341.019 0.454539C341.382 0.272721 342.473 0.454539 343.019 0.454539C346.655 0.0909028 349.382 2.63637 349.019 6.27273C348.837 9.54545 346.473 12.8182 345.201 15.3636C337.201 29.9091 329.382 42.6364 319.928 55.3636L314.292 62.8182C313.382 64.0909 312.473 65.3636 311.382 66.4545C310.292 67.7273 309.019 68.8182 308.473 69.9091L307.928 72.8182C306.655 77.9091 305.201 84.0909 304.11 89.7273C303.746 92.4545 303.201 95.1818 302.837 97.9091C302.837 98.8182 302.292 99.5455 302.292 100.455C302.11 101.364 302.292 102.455 302.11 103.364C301.564 107.364 301.382 111.182 301.201 115.182L300.655 118.273C300.655 122.273 301.201 129 302.473 131.909C302.837 132.818 305.382 135.545 304.837 136.455ZM313.201 56.4545C314.473 54.6364 315.928 52.8182 317.019 51.1818C321.564 44.6364 325.382 39.3636 329.746 32.6364C333.746 26.0909 337.382 19.7273 341.019 12.8182C342.11 10.4545 343.746 8.09091 344.292 5.72727C344.473 5.18182 344.655 3.54546 344.473 3.18182C344.473 3 343.928 3.36364 343.928 3.36364C343.746 3.36364 343.746 3.54546 343.746 3.54546C339.019 5.36364 335.382 10.0909 332.655 13.7273C331.928 14.6364 331.564 15.5455 330.837 16.4545C330.11 17.7273 329.564 18.8182 328.655 20.0909L327.382 22.2727C326.473 23.7273 325.928 25.3636 325.201 27C324.473 28.6364 323.382 29.9091 322.655 31.5455C319.382 38.8182 315.564 47.5455 312.837 55.7273C311.928 58.6364 313.019 56.8182 313.201 56.4545ZM262.11 52.6364C263.019 51.5455 264.837 48.4545 265.382 47.7273C269.019 41.9091 272.837 36.6364 276.11 31C279.746 24.8182 283.201 19.9091 286.473 13.7273C287.019 12.6364 289.382 8.45454 289.201 7.36364C289.201 7.18182 288.837 7.54545 288.837 7.54545C288.292 7.54545 286.292 9.54545 285.564 10.4545C283.201 13.1818 281.928 15 279.928 17.5455C277.928 20.0909 276.655 22.0909 274.837 24.8182C274.292 25.7273 273.746 26.8182 273.201 27.5455C272.292 28.8182 271.928 30.2727 271.201 31.5455C270.655 32.4545 269.928 33.3636 269.564 34.2727C267.382 38.6364 265.928 42.0909 264.11 46.6364C263.564 47.7273 263.382 48.4545 262.837 49.9091C262.655 50.6364 260.837 54.4545 262.11 52.6364ZM352.457 77.1818C347.366 87.1818 343.548 98.4545 338.457 109C338.093 109.545 337.366 111 337.548 111.182C337.912 111.727 343.184 111.545 344.275 111.727C348.821 112.273 352.275 112.818 355.912 114.273C357.548 115 359.366 115.909 360.275 117C360.639 117.727 361.548 119.545 360.821 120.455C359.548 121.909 355.912 119.727 355.548 119C355.366 118.636 355.548 117.182 355.366 117C354.821 116.455 352.275 116.091 350.821 115.909C347.73 115.364 344.821 115 341.002 114.636C339.366 114.455 336.821 113.909 335.912 114.273C335.366 114.455 332.639 120.091 332.275 120.818L328.275 126.818C326.821 128.818 325.366 130.818 323.912 132.636L319.73 137.364C319.548 137.545 319.548 137.909 319.366 138.091C315.366 142.455 309.002 148.455 303.548 152.455C300.639 154.455 298.639 156.091 295.366 157.727C292.275 159.364 287.73 161.364 282.821 161.364C279.002 161.364 274.457 159.727 272.093 157.727C269.73 155.909 266.821 151.909 267.548 145.909C268.093 140.273 272.639 134.455 275.548 131.182C287.366 118.273 306.093 111 329.548 111.182C331.002 111.182 334.639 111.727 335.912 111.182C336.457 110.818 337.366 108.091 338.093 106.636L343.002 95.1818C345.548 89 347.73 82.4545 350.275 76.0909C350.457 75.3636 351.002 74.8182 351.184 74.0909C351.184 73.9091 351.002 73.7273 351.184 73.7273C350.457 74.2727 349.548 75.1818 349.366 75.3636C345.002 79.9091 341.002 84.2727 336.639 88.2727C334.821 89.9091 333.002 91.7273 330.821 92.6364C326.821 94.2727 321.912 92.4545 323.184 86.8182C323.548 84.8182 325.002 82.0909 326.093 80.0909C327.912 76.2727 330.639 71.9091 333.002 68.0909C333.73 66.8182 335.912 63 337.184 62.8182C338.639 62.4545 342.457 64.4545 340.639 67C340.093 67.7273 339.73 67 338.821 67.5455C338.275 67.7273 337.73 69.1818 337.002 70.0909L335.002 72.4545C333.912 74.0909 332.821 76.2727 331.912 77.9091C331.002 79.3636 329.912 81.1818 329.002 83.5455C328.457 84.6364 326.275 89.1818 327.002 90.0909C327.366 90.6364 329.184 88.8182 329.548 88.6364C337.912 81.9091 345.548 72.8182 352.275 65C353.366 63.7273 354.639 62.2727 356.093 60.4545C357.002 59.1818 358.821 56.0909 359.912 55.9091C361.366 55.5455 363.548 57 363.73 57.9091C363.73 58.8182 361.912 60.8182 361.184 61.9091C358.457 65.3636 357.366 68.0909 355.184 71.9091C354.821 72.6364 353.912 73.1818 353.73 73.7273L353.548 75C353.366 75.7273 352.821 76.4545 352.457 77.1818ZM351.912 73L351.366 73.3636C351.548 73.3636 351.912 73.1818 351.912 73ZM332.457 117.909C332.821 117.364 334.457 114.273 334.457 114.091C334.275 113.909 328.639 114.091 328.821 114.091C308.457 114.091 291.912 120.636 281.366 131.364C277.912 134.818 274.275 139.182 272.639 144.091C270.457 150.455 272.457 156.273 277.366 158.273C283.73 160.818 291.002 157.182 295.184 155C297.73 153.727 299.912 152.273 302.275 150.636L305.548 148.273C306.821 147.364 307.73 146.636 308.821 145.727C318.093 138.091 326.457 128.455 332.457 117.909Z"
              fill="#4E6548"
            />
          </svg>
        </div>
      </div>
      <p className="text-th_green mb-5 ml-10">
        Vivere's prime location near Highway 1 provides seamless access to both
        <br />
        the natural beauty of the Fraser River and surrounding communities.
      </p>

      <button
        className="w-fit bg-transparent border border-th_brown ml-10
       text-th_brown hover:bg-th_gray py-3 lg:py-3 px-9 
       lg:px-10 mt-3 text-sm lg:text-base font-sub cursor-pointer"
      >
        EXPLORE LOCATION
      </button>
    </div>
  );
};

export default HomeSectionTwo;