use Rack::Static,
  :urls => [""],
  :root => "project/part1",
  :index => 'index.html'


run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('project/part1/index.html', File::RDONLY)
  ]
}
