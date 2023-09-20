import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import './SkillsBubbleCluster.css'; 

const SkillsBubbleCluster = ({ data }) => {
  const svgRef = useRef();
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth < 600 ? 1000 : 800,
    height: window.innerWidth < 600 ? 1000 : 800,
  });

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    .attr("width", "75%")
    .attr("height", "75%")
    .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("style", "font: 10px sans-serif");

    const pack = data => d3.pack()
      .size([dimensions.width - 2, dimensions.height - 2])
      .padding(10)
      (d3.hierarchy({ children: data })
        .sum(d => d.value));

    const root = pack(data);

    const leaf = svg.selectAll("g")
      .data(root.leaves())
      .join("g")
        .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

        leaf.append("circle")
        .attr("r", d => d.r)
        .attr("fill-opacity", 0.7)
        .attr("fill", "url(#grad)")
        .on('mouseover', (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(300)
            .attr("r", d.r * 1.1);
        })
        .on('mouseout', (event, d) => {
          d3.select(event.currentTarget)
            .transition()
            .duration(300)
            .attr("r", d.r);
        });
  
      leaf.append("text")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .attr("dy", "0.3em")
        .attr("font-size", "25px")
        .text(d => d.data.name);
  
  }, [data, dimensions]);

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth < 600 ? 1000 : 800,
        height: window.innerWidth < 600 ? 1000 : 800,
      });
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <svg ref={svgRef} width="75%" height="75%">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#84fab0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8fd3f4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SkillsBubbleCluster;

