import { PropertyDto, PropertyImageDTO } from "../data/dto/property.dto";
import { Property, PropertyImage } from "../data/Property";

export function mapToPropertyImage(imageDTO: PropertyImageDTO): PropertyImage {
    return {
        imageUrl: imageDTO.imageUrl
    };
}

export function mapToProperty(dto: PropertyDto): Property {
    return {
        id: dto.id,
        title: dto.title,
        description: dto.description,
        type: dto.type.toString(),
        roomCount: dto.roomCount,
        bathRoomCount: dto.bathRoomCount,
        price: dto.price,
        longitude: dto.longitude,
        latitudes: dto.latitudes,
        images: dto.images.map(mapToPropertyImage),
        regions: dto.regions.map((value)=> value.toString())
    };
}