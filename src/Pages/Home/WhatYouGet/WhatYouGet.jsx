import React, { use } from 'react';
import { responsive } from '../../../Layouts/RootLayout';
import Button from '../../../Components/Button/Button';
import Title from '../../../Components/Title/Title';
import { AuthContext } from '../../../Context/AuthProvider';

const WhatYouGet = () => {

    const { user } = use(AuthContext);

    return (
      <div className={`${responsive} my-10`}>
        <div className="bg-primary w-full  rounded-2xl p-10 flex items-center gap-10">
          <div className="basis-1/2 border border-white flex flex-col items-start gap-5">
            <Title title={"What You Get With RecoSyS"} className={"text-white"} />
            <p className='poppins text-white'>
              More than just product recommendations - join a community that's
              changing how people discover and schoose products.
            </p>

            <div></div>
            <Button to={user ? "/queries" : "/auth/register"} text={"Join Our Community"} className={"bg-white btn rounded-3xl poppins text-primary"} />
          </div>
          <div className="basis-1/2 grid grid-cols-2 border gap-5">
            <div className='border'>Active Users</div>
            <div>Active Users</div>
            <div>Active Users</div>
            <div>Active Users</div>
          </div>
        </div>
      </div>
    );
};

export default WhatYouGet;