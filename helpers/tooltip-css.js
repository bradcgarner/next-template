export default () => {
  return <div>
    <style >{`
        .tooltip {
          position: relative;
          cursor: help;
        }
        .tooltip .popover {
          display: none;
          padding: 5px;
          position: absolute;
          left: 50%;
          margin-left: -100px;
          width: 200px;
          top: 115%;
          background-color: #333;
          opacity: 0.95;
          border: 1px solid #52524e;
          border-radius: 10px;
          -moz-box-shadow: 7px 7px 7px -5px rgb(11, 13, 43);
          -webkit-box-shadow: 7px 7px 7px -5px rgb(11,13,43);
          box-shadow: 7px 7px 7px -5px rgb(11,13,43);
          z-index: 9999;
          margin-top: 3px;
          font-size: 12px; 
          text-align: left;
        }
        .tooltip .popover p {
          margin-top: 0;
          margin-bottom: 0;
          width: 100%;
          overflow-wrap: break-word;
          color: white !important;
          font-size: 12px;
          line-height: 150%;
        }
        .tooltip:hover .popover,
        .tooltip .popover-constant {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; 
        }
        .popover:after, 
        .popover:before {
          position: absolute;
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          pointer-events: none; 
        }
        .popover:after {
          border-bottom-color: #333;
          border-width: 7px;
          margin-left: -7px; 
        }
        .popover:before {
          border-bottom-color: black;
          border-width: 7px;
          margin-left: -7px; 
        }
        .tooltip.tooltip-top-right .popover {
          left: -200px;
          margin-left: 22px;
          top: 115%;
          margin-top: 3px;
        }
        .tooltip.tooltip-top-right .popover:after, 
        .tooltip.tooltip-top-right .popover:before {
          left: 185px;
        }
        .tooltip.tooltip-top-left .popover {
          left: 0px;
          margin-left: -5px;
          top: 115%;
          margin-top: 3px;
        }
        .tooltip.tooltip-top-left .popover:after, 
        .tooltip.tooltip-top-left .popover:before {
          left: 15px;
        }
        .tooltip.tooltip-bottom .popover {
          top: auto;
          bottom: 115%;
          margin-bottom: 3px;
          margin-top: 0;
        }
        .tooltip.tooltip-bottom .popover:after, 
        .tooltip.tooltip-bottom .popover:before {
          top: 100%;
        }
        .tooltip.tooltip-bottom .popover:after {
          border-bottom-color: transparent;
          border-top-color: #333;
        }
        .tooltip.tooltip-bottom .popover:before {
          border-bottom-color: transparent;
          border-top-color: black;
        }
        .tooltip.tooltip-bottom-right .popover {
          top: auto;
          bottom: 115%;
          margin-bottom: 3px;
          margin-top: 0;
          left: -200px;
          margin-left: 22px;
        }
        .tooltip.tooltip-bottom-right .popover:after, 
        .tooltip.tooltip-bottom-right .popover:before {
          top: 100%;
          border-bottom-color: transparent;
          border-top-color: #333;
          left: 185px;
        }
        .tooltip.tooltip-bottom-left .popover {
          top: auto;
          bottom: 115%;
          margin-bottom: 3px;
          margin-top: 0;
          left: 0px;
          margin-left: 22px;
        }
        .tooltip.tooltip-bottom-left .popover:after, 
        .tooltip.tooltip-bottom-left .popover:before {
          top: 100%;
          border-bottom-color: transparent;
          border-top-color: #333;
          left: 15px;
        }
        
        @media (max-width: 500px) {
          .field-and-icon .icon-container.tooltip .popover {
            left: 0px;
            margin-left: -5px;
            top: 115%;
            margin-top: 3px;
          }
          .field-and-icon .icon-container.tooltip .popover:after,
          .field-and-icon .icon-container.tooltip .popover:before {
            left: 15px;
          }
        }

        .tooltip .popover-wide-readme p {
          margin-bottom: 10px;
        }
        .tooltip .popover-wide-readme {
          width: 320px;
          margin-left: -160px;
        }
        .tooltip .popover.popover-wide-readme:after, 
        .tooltip .popover.popover-wide-readme:before {
          left: 160px;
        }
        
        @media (min-width: 500px) {
          .tooltip .popover-wide-readme {
            width: 500px;
            margin-left: -250px;
          }
          .tooltip .popover.popover-wide-readme:after, 
          .tooltip .popover.popover-wide-readme:before {
            left: 250px;
          }
        }

        .tooltip.tooltip-hidden .popover {
          display: none;
        }
    `}</style>
    </div>
};