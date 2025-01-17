import React, { FC } from 'react';
import CommunityBundle from "../data/CommunityBundle";

type CommunityBundleProps = {
  bundle: CommunityBundle
};

export default ({ bundle }: CommunityBundleProps) => {
  return (
    <div className="bundle">
      <h2>{bundle.label}</h2>
      <p>{bundle.reward.label}</p>
      <p>{bundle.reward.description}</p>
      <table className='items'>
        <tbody>
          {bundle.items.map(item => (
            <tr>
              <td>{item.label}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
