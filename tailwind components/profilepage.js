const ProfilePane = () => {
  const { t, i18n } = useTranslation();
  return (      
<div class="bg-white block py-10">
          <div class="max-w-2xl mx-auto">
              
              <div class="w-full">
                  <div class="w-full bg-blue-600 h-48 rounded-t-lg"></div>
                  <div class="absolute -mt-20 ml-5">
                      <div class="bg-gray-200 border border-gray-300 h-36 w-40 rounded-lg shadow-md border-b border-primary"></div>
                  </div>
              </div>

              
              <div class="bg-primary border border-primary rounded-b-lg p-5 pt-20 flex flex-col">
                  <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-40"></div>
                  <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-96"></div>
                  <div class="text-sm mt-2 text-gray-200">
                      <div class="flex flex-row ml-auto space-x-2 items-center">
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                          <div class="bg-blue-200 rounded-full h-1 w-1"></div>
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                      </div>
                  </div>

                  <div class="pt-8 flex gap-8">
                      <div class="flex flex-col">
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                      </div>
                      <div class="flex flex-col">
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                      </div>
                      <div class="flex flex-col">
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                      </div>
                      <div class="flex flex-col">
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                          <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                      </div>
                  </div>
                  <div class="py-5 break-all bbcode">
                      <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-44"></div>
                      <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-full h-40"></div>
                  </div>
              </div>
          </div>
      );
};
export default ProfilePane;



export default Footer;
