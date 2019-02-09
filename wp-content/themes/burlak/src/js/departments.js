export default function departmentMap(){
    
    var map = document.querySelector('.map');
    if(map){
        var svg = map.querySelector('svg'),
            regions = svg.querySelectorAll('.region'),
            tooltip = map.querySelector('.map-tooltip');

        function generateTemplate(data){
            let result = '';
            if(data.title || data.phone || data.city || data.address || data.mail){
                result += '<div class="map-tooltip-inner">'
                result += '<div class="map-tooltip-info">';
                if(data.title){
                    var className = 'map-tooltip-title';
                    if(!data.active) className += ' map-tooltip-title__unactive'; 
                    result += '<div class="'+ className +'">'+ data.title +'</div>';
                }
                if(data.phone) result += '<div>'+data.phone+'</div>';
                if(data.city) result += '<div>'+data.city+'</div>';
                if(data.address) result += '<div>'+data.address+'</div>';
                if(data.mail) result += '<div>'+data.mail+'</div>';
                result += '</div>';
                result += '</div>';
            }
            return result;
        }

        function calculateX(value){
            var tooltipInfo = tooltip.getBoundingClientRect(),
                mapInfo = map.getBoundingClientRect();
            if((value - mapInfo.left) + tooltipInfo.width > mapInfo.width - 25){
                tooltip.classList.add('map-tooltip-left');
                return (value - mapInfo.left - tooltipInfo.width - 20);
            }
            else{
                tooltip.classList.remove('map-tooltip-left');
                return value - mapInfo.left + 20;
            }        
        }

        function calculateY(value){
            var tooltipInfo = tooltip.getBoundingClientRect(),
                mapInfo = map.getBoundingClientRect(),
                originalValue = value;
            value = value - tooltipInfo.height / 2;
            if((value - mapInfo.top) < 5){
                return 5;
            }
            if(value + tooltipInfo.height > mapInfo.top + mapInfo.height - 5){
                return mapInfo.height - tooltipInfo.height - 5;
            }
            return value - mapInfo.top;
        }

        function tooltipShow(data){
            let content = generateTemplate(data);
            if(content.length){
                tooltip.innerHTML = generateTemplate(data);
                tooltip.style.left = calculateX(data.x)+'px';
                tooltip.style.top = calculateY(data.y)+'px';
                tooltip.style.opacity = 1;
                tooltip.style.visibility = 'visible';
            }
        }

        function tooltipHide(data){
            tooltip.innerHTML = '';
            tooltip.style.left = 0;
            tooltip.style.top = 0;
            tooltip.style.opacity = 0;
            tooltip.style.visibility = 'hidden';
        }

        function mouseMove(item){
            item.addEventListener('mousemove', function(e){
                var data = {
                        x: e.clientX,
                        y: e.clientY,
                        title: this.getAttribute('data-title'),
                        phone: this.getAttribute('data-phone'),
                        city: this.getAttribute('data-city'),
                        address: this.getAttribute('data-address'),
                        mail: this.getAttribute('data-mail'),
                        active: +this.getAttribute('data-active')
                    };
                tooltipShow(data);
            });
        }

        function mouseLeave(item){
            item.addEventListener('mouseleave', function(e){
                tooltipHide();
            });
        }

        function onClick(item){
            item.addEventListener('click', function(e){
                var data = {
                        code: this.getAttribute('data-code'),
                        active: +this.getAttribute('data-active'),
                    };
                if(data.code && data.active){
                    window.location.href='/departments?region='+data.code
                }
            });
        }
        
        for(var i = 0; i < regions.length; i++){
            (function(i){
                var region = regions[i];
                mouseMove(region);
                mouseLeave(region);
                onClick(region);
            })(i);
        }
    }
}