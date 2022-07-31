
const Footer = () => {
    return (
        <div className='container'>
            <div className='footer'>
                <div className='logo'>
                    <span>mediamanipulation</span>
                </div>
            </div>
            <style jsx>{`
        .logo {
          margin: 0 0 0 0.45em;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          color: #ffffff;
          font-size: 0.8rem;
          margin: 5px 15px;
          display: flex;
          align-items: center;
          margin-left: right;
          justify-content: space-between;
        }

        .container {
          height: 50px;
          width: 100%;
          padding: 10px;
          background-color: #1f61a3;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-left: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer {
          bottom: 0;
          left: 0;
        }
      `}</style>
        </div>

    );
};

export default Footer;
