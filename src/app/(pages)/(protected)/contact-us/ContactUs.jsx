import Link from 'next/link'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <section className="lg:pb-24 py-6 relative">
      <div className="container">
        <div className="lg:flex align-items-center">
          <div className="lg:w-1/2">
            <div className="mb-6 relative bg-clip-border rounded-[0.1875rem]">
              <div className="py-12">
                <h2 className="mb-4 text-2xl/6 mt-0 font-medium">
                  Let&apos;s Talk Further
                </h2>
                <p className="mb-12 text-base/6">
                  Please fill out the following form and we will get back to you
                  shortly
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 ms-auto overflow-x-hidden">
            <div className="h-[520px]">
              <div
                id="marker-map5"
                className="h-100"
                data-toggle="map"
                data-map='{"mapCenter": [40.749179, -73.989276], "zoom": 12, "useTextIcon": false, "interactive": true, "geojson": "/assets/sample-listing-geojson.json" }'
              >
                <iframe
                  className="w-full h-[500px]"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569"
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex mb-3">
            <span className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg relative me-4 shrink-0">
              <svg
                className="w-7 h-7 text-primary"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <path
                    d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z"
                    id="Combined-Shape"
                    fill="currentcolor"
                    opacity="0.3"
                  />
                  <path
                    d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z"
                    id="Combined-Shape"
                    fill="currentcolor"
                  />
                </g>
              </svg>
            </span>
            <div className="grow">
              <h5 className="text-base text-gray-700">Email</h5>
              <a href="#" className="text-gray-500 my-1">
                youremail@gmail.com
              </a>
            </div>
          </div>
          <div className="flex mb-3">
            <span className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg relative me-4 shrink-0">
              <svg
                className="w-7 h-7 text-orange-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <path
                    d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z"
                    id="Path-76"
                    fill="currentcolor"
                  />
                  <path
                    d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z"
                    id="Combined-Shape"
                    fill="currentcolor"
                    opacity="0.3"
                  />
                </g>
              </svg>
            </span>
            <div className="grow">
              <h5 className="text-base text-gray-700">Phone</h5>
              <a href="#" className="text-gray-500 my-1">
                +00 123 456 7890
              </a>
            </div>
          </div>
          <div className="flex mb-3">
            <span className="flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-lg relative me-4 shrink-0">
              <svg
                className="w-7 h-7 text-teal-500"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <rect id="bound" x={0} y={0} width={24} height={24} />
                  <path
                    d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
                    id="Combined-Shape"
                    fill="currentcolor"
                  />
                </g>
              </svg>
            </span>
            <div className="grow">
              <h5 className="text-base text-gray-700">Address</h5>
              <Link href="" className="text-gray-500 my-1">
                565 Brrom Str, NY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
