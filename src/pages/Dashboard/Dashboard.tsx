import {
  containerStyle,
  gridStyle,
  headerRowStyle,
  subheaderCellStyle,
  subheaderGridStyle,
  subheaderColumnStyle,
  subheaderTitleStyle,
  dataRowStyle,
  dataGridStyle,
  dataCellStyle,
} from './Dashboard.styles';

type Props = {};

function Dashboard({}: Props) {
  return (
    <div css={containerStyle}>
      <div css={gridStyle}>
        {/* Header Row */}
        <div css={headerRowStyle}>
          <h1>
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </h1>
          <h1>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h1>
        </div>

        {/* Subheader Row */}
        <div css={subheaderCellStyle}>
          <p css={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Tasks</p>
        </div>
        <div css={subheaderGridStyle}>
          <div css={subheaderColumnStyle}>
            <h3 css={subheaderTitleStyle}>Plan</h3>
            <div css={{ padding: '8px' }}>Total</div>
          </div>
          <div css={subheaderColumnStyle}>
            <h3 css={subheaderTitleStyle}>Result</h3>
            <div css={{ padding: '8px' }}>Total</div>
          </div>
        </div>

        {/* Data Row */}
        <div css={dataRowStyle}>Task Name - Company Name</div>
        <div css={dataGridStyle}>
          <div css={dataCellStyle}>5</div>
          <div css={dataCellStyle}>5</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
