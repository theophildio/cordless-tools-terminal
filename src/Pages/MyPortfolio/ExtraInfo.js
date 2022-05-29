import React from 'react';

const ExtraInfo = () => {
  return (
    <div>
      <h2 className='text-2xl text-primary font-bold capitalize'>Educations and Skills</h2>
      <div>
      <div className="overflow-x-auto mt-3">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <td className='text-lg font-semibold'>Education:</td>
                <td>Higher Secondary Certificate (HSC)</td>
              </tr>
              <tr>
                <th></th>
                <td className='text-lg font-semibold'>Skills:</td>
                <td> 
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap 5</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Firebase Authentication</li>
                    <li>Rest API</li>
                    <li>Node.js (Basic)</li>
                    <li>Express.js (Basic)</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>Netlify</li>
                    <li>Git and GitHub</li>
                  </ul> 
                </td>
              </tr>
              <tr>
                <th></th>
                <td className='text-lg font-semibold'>Projects:</td>
                <td> 
                  <ul>
                    <li className='mb-2'><a className='link' href="https://cordless-tools-terminal.web.app/" target="_blank" rel="noreferrer">Manufacturer Web Application</a></li>
                    <li className='mb-2'><a className='link' href="https://warehouse-management-90c9c.web.app/" target="_blank" rel="noreferrer">Warehouse Management Web Application</a></li>
                    <li className='mb-2'><a className='link' href="https://online-tutor-51c49.web.app/" target="_blank" rel="noreferrer">Online Tutor Web Application</a></li>
                    <li className='mb-2'><a className='link' href="https://apple-watch-review-react-theophildio.netlify.app/" target="_blank" rel="noreferrer">Apple Watch Review</a></li>
                  </ul> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;