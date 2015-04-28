google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  data.addRows([
    [{
      v: 'Mike',
      f: 'Mike<div style="color:red; font-style:italic">President</div>'
    }, '', 'The President'],
    [{
      v: 'Jim',
      f: 'Jim<div style="color:red; font-style:italic">Vice President</div>'
    }, 'Mike', 'VP'],
    ['Alice', 'Mike', ''],
    ['Bob', 'Jim', 'Bob Sponge'],
    ['Carol', 'Bob', '']
  ]);

  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  chart.draw(data, {
    allowHtml: true
  });
  google.visualization.events.addListener(chart, 'select', function(oEventData) {
    selectHandler(chart, data, oEventData);
  });
  //google.visualization.events.trigger(chart, 'select', {aaa: "a", bbb:"b"});
}

function selectHandler(chart, data, oEventData) {
  //console.log(this);
  //console.log(event);
  //console.log(chart);
  console.log(data);
  console.log(oEventData);
  var vRow = chart.getSelection();
  var row = null;
  for (i=0; i<vRow.length; i++) {
    row = vRow[i];
    console.log(row);
    console.log(data.getRowProperties(row.row));
  }
  console.log(data.getRowProperties(0));
  console.log(data.getTableProperties());
  //alert('A node(' + chart.getSelection() + ') was selected');
}
