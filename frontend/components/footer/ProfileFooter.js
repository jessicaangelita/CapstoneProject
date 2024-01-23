import React from 'react'

export const ProfileFooter = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 mb-6 flex-col">
        <span className="block text-sm text-primary-black sm:text-center">
          © 2023{" "}
          <a href="https://www.telkom.co.id/sites" className="hover:underline">
            JICO™
          </a>
          . Privacy - Terms.
        </span>
      </div>
    </>
  );
}

export default ProfileFooter