Add-Type -AssemblyName System.Drawing
$sizes = @(72, 96, 128, 144, 152, 192, 384, 512)
$iconDir = "C:\Users\adhamfarrag246\.gemini\antigravity\scratch\islamic-app\icons"

foreach ($s in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap($s, $s)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    $rect = New-Object System.Drawing.Rectangle(0, 0, $s, $s)
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(26, 26, 14))
    $g.FillRectangle($bgBrush, $rect)

    $goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(212, 175, 55), [Math]::Max(2, [int]($s * 0.04)))
    $margin = [int]($s * 0.05)
    $g.DrawEllipse($goldPen, $margin, $margin, $s - 2*$margin, $s - 2*$margin)

    $innerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(42, 42, 26))
    $g.FillEllipse($innerBrush, $margin + 2, $margin + 2, $s - 2*$margin - 4, $s - 2*$margin - 4)

    $cx = $s * 0.48
    $cy = $s * 0.50
    $r = $s * 0.28
    $crescentBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 208, 96))
    $g.FillEllipse($crescentBrush, [float]($cx - $r), [float]($cy - $r), [float]($r * 2), [float]($r * 2))

    $cutBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(42, 42, 26))
    $cutR = $r * 0.82
    $cutCx = $cx + ($r * 0.38)
    $cutCy = $cy - ($r * 0.15)
    $g.FillEllipse($cutBrush, [float]($cutCx - $cutR), [float]($cutCy - $cutR), [float]($cutR * 2), [float]($cutR * 2))

    $starBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 208, 96))
    $starX = $s * 0.65
    $starY = $s * 0.42
    $starR = [Math]::Max(2, [int]($s * 0.06))
    $g.FillEllipse($starBrush, [float]($starX - $starR), [float]($starY - $starR), [float]($starR * 2), [float]($starR * 2))

    $outPath = Join-Path $iconDir ("icon-" + $s + "x" + $s + ".png")
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}
Write-Output "Successfully generated all PNG icons!"
