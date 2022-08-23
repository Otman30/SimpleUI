<!DOCTYPE html>
<html>
<head>
    <title>W2UI Demo: layout/3</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.min.css" />
</head>
<body>

<div id="layout" style="width: 100%; height: 400px;"></div>
<br>
<input type="checkbox" id="instant" onclick="window.instant = this.checked;"> <label for="instant">Instant</label>
<div style="height: 10px;"></div>
<button class="w2ui-btn" onclick="w2ui['layout'].toggle('top', window.instant)">Top</button>
<button class="w2ui-btn" onclick="w2ui['layout'].toggle('left', window.instant)">Left</button>
<button class="w2ui-btn" onclick="w2ui['layout'].toggle('right', window.instant)">Right</button>
<button class="w2ui-btn" onclick="w2ui['layout'].toggle('preview', window.instant)">Preview</button>
<button class="w2ui-btn" onclick="w2ui['layout'].toggle('bottom', window.instant)">Bottom</button>

<script type="text/javascript">
query(() => {
    let pstyle = 'border: 1px solid #efefef; padding: 5px;';
    new w2layout({
        box: '#layout',
        name: 'layout',
        panels: [
            { type: 'top', size: 50, resizable: true, style: pstyle, html: 'top' },
            { type: 'left', size: 200, resizable: true, style: pstyle, html: 'left' },
            { type: 'main', style: pstyle, html: 'main' },
            { type: 'preview', size: '50%', resizable: true, hidden: true, style: pstyle, html: 'preview' },
            { type: 'right', size: 200, resizable: true, hidden: true, style: pstyle, html: 'right' },
            { type: 'bottom', size: 50, resizable: true, hidden: true, style: pstyle, html: 'bottom' }
        ]
    });
});
</script>

</body>
</html>
